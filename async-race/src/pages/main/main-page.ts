import { mainElement } from '../../components/main-elements/main-elements';
import { cleanerElementFromChildren } from '../../utils/cleaner-element-from-children';
import { createElement } from '../../utils/create-element';
import { raceArea } from './components/race-area';
import { createSetCars } from './components/set-cars';

const styles = {
  title: 'text-2xl',
};

export const mainPage = (): void => {
  cleanerElementFromChildren(mainElement);

  createElement({
    tagName: 'h1',
    className: 'visually-hidden',
    text: 'main page async-race',
    parent: mainElement,
  });
  createElement({
    tagName: 'h2',
    text: 'Garage',
    className: styles.title,
    parent: mainElement,
  });
  const callback = createSetCars(mainElement);
  const wrapperForArea = createElement({ tagName: 'div', parent: mainElement });
  raceArea(wrapperForArea, callback);
};
