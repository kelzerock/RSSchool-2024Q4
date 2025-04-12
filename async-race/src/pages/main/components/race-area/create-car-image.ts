import { createElement } from '../../../../utils/create-element';
import { createWheels } from './create-wheel';

const styles = {
  carImg:
    'absolute top-[0px] left-[0px] w-[40px] bottom-[3px] rounded-tl-[15px] rounded-tr-[40px] relative border-1 border-stone-500',
  finishLine:
    'absolute w-[46px] h-full right-[0px] border-l-2 border-dotted border-white',
};

export const createCarImage = (parent: HTMLElement): HTMLDivElement => {
  const dataForElements = [
    {
      className: styles.carImg,
    },
    {
      className: styles.finishLine,
    },
  ];

  const elements = dataForElements.map((element) =>
    createElement({ ...element, tagName: 'div', parent })
  );
  const carImage = elements[1];

  createWheels(carImage);

  return carImage;
};
