import { createElement } from '../../../../utils/create-element';

const styles = {
  wheel:
    'w-[14px] h-[14px] bg-stone-950 rounded-full -bottom-[5px] absolute border-amber-800 border-2',
};

export const createWheels = (parent: HTMLElement): void => {
  const dataForElements = [
    {
      className: `${styles.wheel} left-[3px]`,
    },
    {
      className: `${styles.wheel} right-[3px]`,
    },
  ];
  dataForElements.forEach((element) =>
    createElement({ ...element, tagName: 'div', parent })
  );
};
