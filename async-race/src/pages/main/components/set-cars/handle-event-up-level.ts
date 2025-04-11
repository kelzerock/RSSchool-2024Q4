import type { CarForCreate } from '../../../../types/car-for-create';

export const handleEventUpLevel = (
  event: Event,
  dataCar: CarForCreate,
  element: HTMLInputElement
): void => {
  const { target } = event;
  if (target instanceof HTMLInputElement) {
    const { value } = target;
    if (element.getAttribute('type') === 'color') {
      dataCar.color = value;
    } else {
      dataCar.name = value;
    }
  }
};
