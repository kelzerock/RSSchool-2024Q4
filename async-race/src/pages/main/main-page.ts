import { mainElement } from '../../components/main-elements/main-elements';
import { START_COUNT, STEP } from '../../constants/global-constants';
import { Pagination } from '../../enums/pagination';
import { cssButton } from '../../global-styles';
import { stateRace } from '../../state/state';
import type { DataToCreateElement } from '../../types/data-to-create-element';
import { cleanerElementFromChildren } from '../../utils/cleaner-element-from-children';
import { createElement } from '../../utils/create-element';
import { setDisabledElements } from '../../utils/set-disabled-elements';
import { raceArea } from './components/race-area';
import { createSetCars } from './components/set-cars';

const styles = {
  title: 'text-2xl',
  wrapper: 'flex flex-row gap-x-2 my-2',
};

const dataForElements: [
  DataToCreateElement<'div'>,
  DataToCreateElement<'button'>,
  DataToCreateElement<'button'>,
] = [
  {
    tagName: 'div',
    className: styles.wrapper,
  },
  {
    tagName: 'button',
    className: cssButton,
    text: 'prev',
  },
  {
    tagName: 'button',
    className: cssButton,
    text: 'next',
  },
];

const createButtons = (parent: HTMLElement): void => {
  const wrapper = createElement({ ...dataForElements[0], parent });
  const previousPage = createElement({
    ...dataForElements[1],
    parent: wrapper,
  });
  const nextPage = createElement({ ...dataForElements[2], parent: wrapper });

  if (
    stateRace.state.garage.length <= stateRace.maxViewCar ||
    (stateRace._page + STEP) * stateRace.maxViewCar >
      stateRace.state.garage.length
  ) {
    setDisabledElements([nextPage], true);
  }

  if (stateRace._page === START_COUNT)
    setDisabledElements([previousPage], true);

  const handleClickChangePage = (direction: Pagination): void => {
    stateRace._page += direction === Pagination.next ? STEP : -STEP;
  };

  previousPage.addEventListener('click', () =>
    handleClickChangePage(Pagination.previous)
  );
  nextPage.addEventListener('click', () =>
    handleClickChangePage(Pagination.next)
  );
};

export const mainPage = (): void => {
  cleanerElementFromChildren(mainElement);

  createElement({
    tagName: 'h1',
    className: 'visually-hidden',
    text: 'main page async-race',
    parent: mainElement,
  });

  const carsText =
    stateRace.state.garage.length === START_COUNT ||
    stateRace.state.garage.length > STEP
      ? 'cars'
      : 'car';
  createElement({
    tagName: 'h2',
    text: `Garage: "${stateRace.state.garage.length} ${carsText}"`,
    className: styles.title,
    parent: mainElement,
  });
  createElement({
    tagName: 'h3',
    text: `Page #${stateRace._page + STEP}`,
    parent: mainElement,
  });

  createButtons(mainElement);
  const callback = createSetCars(mainElement);
  const wrapperForArea = createElement({ tagName: 'div', parent: mainElement });
  raceArea(wrapperForArea, callback);
};
