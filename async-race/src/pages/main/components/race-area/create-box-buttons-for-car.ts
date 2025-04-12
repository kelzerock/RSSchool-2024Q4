import { cssButton } from '../../../../global-styles';
import { createElement } from '../../../../utils/create-element';

const styles = {
  boxForButtons: 'flex flex-row gap-x-1',
};

export const createBoxButtonsForCar = (
  parent: HTMLElement
): HTMLButtonElement[] => {
  const boxForButtons = createElement({
    tagName: 'div',
    parent,
    className: styles.boxForButtons,
  });

  const dataForButtons = [
    {
      text: 'A',
      className: cssButton,
    },
    {
      text: 'B',
      className: cssButton,
      attributes: [{ attr: 'disabled', value: '' }],
    },
  ];

  return dataForButtons.map((element) =>
    createElement({ ...element, tagName: 'button', parent: boxForButtons })
  );
};
