import { mainElement } from '../../components/main-elements/main-elements';
import { stateRace } from '../../state/state';
import { cleanerElementFromChildren } from '../../utils/cleaner-element-from-children';
import { createElement } from '../../utils/create-element';

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
    text: 'button',
    parent: mainElement,
    className: 'border-2 bg-white',
  });
  button.addEventListener('click', async () => {
    await stateRace.getCars();
    console.log(stateRace.state.garage);
  });
};
