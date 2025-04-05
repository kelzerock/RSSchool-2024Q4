import { mainElement } from '../../components/main-elements/main-elements';
import { cleanerElementFromChildren } from '../../utils/cleaner-element-from-children';
import { createElement } from '../../utils/create-element';

const styles = {
  title: 'text-2xl',
};

export const winnersPage = (): void => {
  cleanerElementFromChildren(mainElement);
  createElement({
    tagName: 'h1',
    className: 'visually-hidden',
    text: 'winner page async-race',
    parent: mainElement,
  });
  createElement({
    tagName: 'h2',
    text: 'Winners',
    className: styles.title,
    parent: mainElement,
  });
};
