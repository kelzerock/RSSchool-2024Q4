import { createElement } from '../../utils/create-element';
import { createNavigationMenu } from '../navigation-menu/navigation-menu';
const styles = {
  mainWrapper:
    'flex flex-col max-w-600 bg-teal-900 mx-auto my-0 px-5 py-8 min-h-full',
  headerElement: 'px-5 py-2',
  mainElement: 'grow px-5 py-2',
  footerElement: 'px-5 py-2',
  headerTitle: 'text-4xl text-center font-bold uppercase text-emerald-500 my-1',
};

export const mainWrapper = createElement({
  tagName: 'div',
  className: styles.mainWrapper,
  parent: document.body,
});

export const headerElement = createElement({
  tagName: 'header',
  className: styles.headerElement,
  parent: mainWrapper,
});

export const mainElement = createElement({
  tagName: 'main',
  className: styles.mainElement,
  parent: mainWrapper,
});

export const footerElement = createElement({
  tagName: 'footer',
  className: styles.footerElement,
  parent: mainWrapper,
});

const headerTitle = (title: string): void => {
  createElement({
    tagName: 'h2',
    text: title,
    parent: headerElement,
    className: styles.headerTitle,
  });
};

headerTitle('Async-race');

createNavigationMenu(headerElement);
