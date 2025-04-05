import { mainElement } from '../../components/main-elements/main-elements';
import { cleanerElementFromChildren } from '../../utils/cleaner-element-from-children';

export const page404 = (): void => {
  cleanerElementFromChildren(mainElement);
  const element = document.createElement('div');

  mainElement.append(element);
  element.innerHTML = '<h1>404 page</h1>';
};
