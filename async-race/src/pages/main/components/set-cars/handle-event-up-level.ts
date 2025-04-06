export type DataCar = { name: string; color: string };

const isInputElement = (
  target: EventTarget | null
): target is HTMLInputElement => target instanceof HTMLInputElement;

export const handleEventUpLevel = (
  event: Event,
  dataCar: DataCar,
  element: HTMLElement
): void => {
  const { target } = event;
  if (isInputElement(target)) {
    const { value } = target;
    if (element.getAttribute('type') === 'color') {
      dataCar.color = value;
    } else {
      dataCar.name = value;
    }
  }
};
