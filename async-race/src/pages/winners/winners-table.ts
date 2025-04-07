import { createElement } from '../../utils/create-element';
const styles = {
  title: 'flex flex-row gap-x-2',
  textTitle: '',
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
};
