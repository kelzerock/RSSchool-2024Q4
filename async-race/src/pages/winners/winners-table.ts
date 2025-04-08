import { type Car, stateRace, type Winner } from '../../state/state';
import { createElement } from '../../utils/create-element';
const styles = {
  title: 'flex flex-row gap-x-2',
  row: 'flex flex-row gap-x-2 mt-1',
  textTitle: 'basis-20 flex items-center justify-center',
  text: 'basis-20 flex items-center justify-center',
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
    [id, name, color, wins, time].forEach((element) => {
      if (element === color) {
        const colorElementWrapper = createElement({
          tagName: 'div',
          className: styles.text,
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
          className: styles.text,
          parent: row,
          text: element.toString(),
        });
      }
    });
  }
};

export const createWinnersTable = (parent: HTMLElement): void => {
  const title = createElement({
    tagName: 'div',
    parent,
    className: styles.title,
  });
  ['id', 'car', 'color', 'wins', 'best time'].forEach((text) => {
    createElement({
      tagName: 'div',
      parent: title,
      className: styles.textTitle,
      text,
    });
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
