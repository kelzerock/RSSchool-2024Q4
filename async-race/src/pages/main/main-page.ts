import { mainElement } from '../../components/main-elements/main-elements';
import { cssButton } from '../../global-styles';
import { stateRace } from '../../state/state';
import { cleanerElementFromChildren } from '../../utils/cleaner-element-from-children';
import { createElement } from '../../utils/create-element';
import { setDisabledElements } from '../../utils/set-disabled-elements';
import { raceArea } from './components/race-area';
import { createSetCars } from './components/set-cars';

const styles = {
  title: 'text-2xl',
  wrapper: 'flex flex-row gap-x-2 my-2',
};

const createButtons = (parent: HTMLElement): void => {
  const offset = 1;
  const wrapper = createElement({
    tagName: 'div',
    className: styles.wrapper,
    parent,
  });
  const previousPage = createElement({
    tagName: 'button',
    className: cssButton,
    text: 'prev',
    parent: wrapper,
  });
  const nextPage = createElement({
    tagName: 'button',
    className: cssButton,
    text: 'next',
    parent: wrapper,
  });
  if (
    stateRace.state.garage.length <= stateRace.maxViewCar ||
    (stateRace._page + offset) * stateRace.maxViewCar >
      stateRace.state.garage.length
  ) {
    setDisabledElements([nextPage], true);
  }
  const startPage = 0;
  if (stateRace._page === startPage) setDisabledElements([previousPage], true);

  const handleClickChangePage = (direction: '+' | '-'): void => {
    stateRace._page += direction === '+' ? offset : -offset;
  };

  previousPage.addEventListener('click', () => handleClickChangePage('-'));
  nextPage.addEventListener('click', () => handleClickChangePage('+'));
};

export const mainPage = (): void => {
  const offset = 1;
  const startNumber = 0;
  cleanerElementFromChildren(mainElement);

  createElement({
    tagName: 'h1',
    className: 'visually-hidden',
    text: 'main page async-race',
    parent: mainElement,
  });

  const carsText =
    stateRace.state.garage.length === startNumber ||
    stateRace.state.garage.length > offset
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
    text: `Page #${stateRace._page + offset}`,
    parent: mainElement,
  });

  createButtons(mainElement);
  const callback = createSetCars(mainElement);
  const wrapperForArea = createElement({ tagName: 'div', parent: mainElement });
  raceArea(wrapperForArea, callback);
};
