import { mainElement } from '../../components/main-elements/main-elements';
import { stateRace } from '../../state/state';
import { cleanerElementFromChildren } from '../../utils/cleaner-element-from-children';
import { createElement } from '../../utils/create-element';
import { stopStartEngine } from '../../utils/request/stop-start-engine';
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
  const button = createElement({
    tagName: 'button',
    text: 'view state',
    parent: mainElement,
    className: 'border-2 bg-white px-2',
  });
  button.addEventListener('click', async () => {
    await stateRace.getCars();
    console.log(stateRace.state);
    stopStartEngine(
      { name: 'tttt==>>-----===', color: '#fffafa', id: 12 },
      'started'
    );
  });
  const callback = createSetCars(mainElement);
  const wrapperForArea = createElement({ tagName: 'div', parent: mainElement });
  raceArea(wrapperForArea, callback);
};
