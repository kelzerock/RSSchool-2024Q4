import { attribute } from '../../../../../enums/attribute';
import type { CarForCreate } from '../../../../../types/car-for-create';

export const handleEventInput = (
  event: Event,
  dataCar: CarForCreate,
  element: HTMLInputElement
): void => {
  const { target } = event;

  if (target instanceof HTMLInputElement) {
    const { value } = target;

    if (element.getAttribute('type') === attribute.color) {
      dataCar.color = value;
    } else {
      dataCar.name = value;
    }
  }
};
