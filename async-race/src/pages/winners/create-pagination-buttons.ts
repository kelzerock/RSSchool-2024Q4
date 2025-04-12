import { Localstorage } from '../../enums/localstorage';
import { cssButton } from '../../global-styles';
import { stateRace } from '../../state/state';
import type { DataToCreateElement } from '../../types/data-to-create-element';
import { createElement } from '../../utils/create-element';
import { saveToLocalstorage } from '../../utils/save-to-localstorage';
import { setDisabledElements } from '../../utils/set-disabled-elements';
import { winnersPage } from './winners-page';

const styles = {
  wrapperButtons: 'flex-row flex my-1 gap-x-1',
};

const dataForElements: [
  DataToCreateElement<'div'>,
  DataToCreateElement<'button'>,
  DataToCreateElement<'button'>,
] = [
  {
    tagName: 'div',
    className: styles.wrapperButtons,
  },
  {
    tagName: 'button',
    className: cssButton,
    text: 'prev',
  },
  {
    tagName: 'button',
    className: cssButton,
    text: 'next',
  },
];

export const createPaginationButtons = (parent: HTMLElement): void => {
  const PAGE = 1;
  const wrapper = createElement({ ...dataForElements[0], parent });
  const previousButton = createElement({
    ...dataForElements[1],
    parent: wrapper,
  });
  const nextButton = createElement({ ...dataForElements[2], parent: wrapper });

  if (stateRace.pageWinnersData.page === PAGE) {
    setDisabledElements([previousButton], true);
  }

  if (
    stateRace.pageWinnersData.page * stateRace.pageWinnersData.limit >=
    stateRace.countWinner
  ) {
    setDisabledElements([nextButton], true);
  }

  previousButton.addEventListener('click', async () => {
    stateRace.pageWinnersData.page = stateRace.pageWinnersData.page - PAGE;
    saveToLocalstorage(Localstorage.winners, stateRace.pageWinnersData);
    await winnersPage();
  });

  nextButton.addEventListener('click', async () => {
    stateRace.pageWinnersData.page = stateRace.pageWinnersData.page + PAGE;
    saveToLocalstorage(Localstorage.winners, stateRace.pageWinnersData);
    await winnersPage();
  });
};
