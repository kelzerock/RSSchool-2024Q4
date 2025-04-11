import { setDisabledElements } from '../../../../../utils/set-disabled-elements';
import { mainPage } from '../../../main-page';
import { generateCars } from '../generate-cars';

export const handleClickGenerateButton = async (
  button: HTMLElement
): Promise<void> => {
  setDisabledElements([button], true);
  await generateCars();
  mainPage();
  setDisabledElements([button], false);
};
