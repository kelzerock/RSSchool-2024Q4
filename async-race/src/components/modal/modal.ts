import { type Car } from '../../state/state';
import { cleanerElementFromChildren } from '../../utils/cleaner-element-from-children';
import { createElement } from '../../utils/create-element';

const styles = {
  modal:
    'fixed w-full h-full top-0 bg-yellow-500/40 flex items-center justify-center',
  infoBlock:
    'w-3/4 h-3/4 border-red-950 border-5 rounded-4xl bg-yellow-500/90 px-4 py-6 flex flex-col items-center',
  winnerInfo:
    'grow flex flex-col items-center justify-center gap-y-5 font-bold uppercase',
  title: 'text-2xl',
  button:
    'uppercase font-bold border-red-950 border-3 bg-yellow-700 p-4 rounded-3xl hover:cursor-pointer hover:bg-yellow-800 hover:text-stone-200 transition-colors duration-300',
  span: 'w-[100px] h-[50px] rounded-2xl',
};

const createHTML = (car: Car, duration: number): HTMLElement[] => {
  const message = `car "${car.name}"`;
  const idMessage = `id #${car.id}`;
  const timeMessage = `time: ${Math.floor(duration)} ms`;

  const wrapper = createElement({
    tagName: 'div',
    className: styles.modal,
    parent: document.body,
  });
  const infoBlock = createElement({
    tagName: 'div',
    className: styles.infoBlock,
    parent: wrapper,
  });
  const wrapperForWinner = createElement({
    tagName: 'div',
    className: styles.winnerInfo,
    parent: infoBlock,
  });
  ['winner', message, idMessage, timeMessage].forEach((message) => {
    createElement({
      tagName: 'h3',
      className: styles.title,
      parent: wrapperForWinner,
      text: message,
    });
  });
  return [wrapper, infoBlock, wrapperForWinner];
};

export const createModal = (car: Car, duration: number): void => {
  document.body.classList.add('lock');
  const [wrapper, infoBlock, wrapperForWinner] = createHTML(car, duration);

  const colorCar = createElement({
    tagName: 'div',
    className: styles.span,
    parent: wrapperForWinner,
  });
  const button = createElement({
    tagName: 'button',
    className: styles.button,
    parent: infoBlock,
    text: 'go to the next race!!!',
  });

  colorCar.style.background = car.color;

  [button, wrapper].forEach((element) => {
    element.addEventListener('click', (event: Event) => {
      if (event.target === button || event.target === wrapper) {
        cleanerElementFromChildren(wrapper);
        wrapper.remove();
        document.body.classList.remove('lock');
      }
    });
  });
};
