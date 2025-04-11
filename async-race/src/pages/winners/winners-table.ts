import { Order } from '../../enums/order';
import { Sort } from '../../enums/sort';
import { stateRace } from '../../state/state';
import type { Car } from '../../types/car';
import type { Winner } from '../../types/winner';
import { createElement } from '../../utils/create-element';
import { handleName } from '../../utils/handle-name';
import { saveDataWinners, winnersPage } from './winners-page';

const INDEX_NAME = 1;
const styles = {
  title: 'flex flex-row gap-x-2',
  row: 'flex flex-row gap-x-2 mt-1',
  textTitle:
    'md:basis-20 md:text-base flex items-center justify-center text-sm basis-10 text-center',
  textTitleWide:
    'basis-40 basis-20 text-sm md:text-base flex items-center justify-center truncate text-center',
  colorInfo: 'rounded-[50%] h-full aspect-square',
};

const createRowWinner = (
  carData: Car | undefined,
  winner: Winner,
  row: HTMLElement
): void => {
  const { wins, time } = winner;
  if (carData) {
    const { id, color, name } = carData;
    [id, name, color, wins, time].forEach((element, index) => {
      if (element === color) {
        const colorElementWrapper = createElement({
          tagName: 'div',
          className: styles.textTitle,
          parent: row,
        });
        const colorElement = createElement({
          tagName: 'div',
          className: styles.colorInfo,
          parent: colorElementWrapper,
        });
        colorElement.style.background = color;
      } else {
        createElement({
          tagName: 'div',
          className:
            index === INDEX_NAME ? styles.textTitleWide : styles.textTitle,
          parent: row,
          text: handleName(element.toString()),
        });
      }
    });
  }
};

const dataForWinnersTable = [
  { text: 'id', attr: Sort.id },
  { text: 'car' },
  { text: 'color' },
  { text: 'wins', attr: Sort.wins },
  { text: 'best time', attr: Sort.time },
];

const sortingHandle = async (
  item:
    | {
        text: string;
        attr: Sort;
      }
    | {
        text: string;
        attr?: undefined;
      }
): Promise<void> => {
  if (item.attr === stateRace.pageWinnersData.sort) {
    const nextOrder =
      Order.ASC === stateRace.pageWinnersData.order ? Order.DESC : Order.ASC;
    stateRace.pageWinnersData.order = nextOrder;
  } else {
    if (item.attr) {
      stateRace.pageWinnersData.sort = item.attr;
    }
  }
  saveDataWinners(stateRace.pageWinnersData);
  await winnersPage();
};

export const createWinnersTable = (parent: HTMLElement): void => {
  const title = createElement({
    tagName: 'div',
    parent,
    className: styles.title,
  });
  dataForWinnersTable.forEach((item, index) => {
    const element = createElement({
      tagName: 'div',
      parent: title,
      className: index === INDEX_NAME ? styles.textTitleWide : styles.textTitle,
      text: item.text,
    });
    if (item.attr) {
      element.classList.add(
        'cursor-pointer',
        'hover:bg-stone-500',
        'hover:rounded-lg'
      );
      element.dataset['type'] = item.attr;
      element.addEventListener('click', () => sortingHandle(item));
    }
  });

  stateRace.state.winners.forEach((winner) => {
    const carData = stateRace.state.garage.find((car) => car.id === winner.id);

    const row = createElement({
      tagName: 'div',
      className: styles.row,
      parent,
    });
    createRowWinner(carData, winner, row);
  });
};
