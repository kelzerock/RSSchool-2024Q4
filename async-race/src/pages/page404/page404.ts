import { mainElement } from '../../components/main-elements/main-elements';
import { cleanerElementFromChildren } from '../../utils/cleaner-element-from-children';
import { createElement } from '../../utils/create-element';

const styles = {
  title: 'text-2xl',
};

export const page404 = (): void => {
  cleanerElementFromChildren(mainElement);
  createElement({
    tagName: 'h1',
    className: 'visually-hidden',
    text: '404 page async-race',
    parent: mainElement,
  });
  createElement({
    tagName: 'h2',
    text: "Sorry, this page doesn't find!",
    className: styles.title,
    parent: mainElement,
  });
};
