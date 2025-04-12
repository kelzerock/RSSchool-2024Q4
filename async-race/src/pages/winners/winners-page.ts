import { mainElement } from '../../components/main-elements/main-elements';
import { cssButton } from '../../global-styles';
import { stateRace } from '../../state/state';
import type { PageDataParameters } from '../../types/page-data-parameters';
import { cleanerElementFromChildren } from '../../utils/cleaner-element-from-children';
import { createElement } from '../../utils/create-element';
import { getWinners } from '../../utils/request/get-winners';
import { setDisabledElements } from '../../utils/set-disabled-elements';
import { createWinnersTable } from './winners-table';

const styles = {
  title: 'text-2xl',
  wrapper: 'flex flex-col bg-stone-400 rounded-lg p-2',
  wrapperButtons: 'flex-row flex my-1 gap-x-1',
};

export const saveDataWinners = (data: PageDataParameters): void => {
  localStorage.setItem('winners', JSON.stringify(data));
};

const isDataWinner = (data: unknown): data is PageDataParameters => {
  return data &&
    typeof data === 'object' &&
    'page' in data &&
    typeof data.page === 'number' &&
    'limit' in data &&
    typeof data.limit === 'number' &&
    'sort' in data &&
    'order' in data &&
    typeof data.sort === 'string' &&
    ['id', 'wins', 'time'].includes(data.sort) &&
    typeof data.order === 'string' &&
    ['ASC', 'DESC'].includes(data.order)
    ? true
    : false;
};

const loadDataWinner = (): void => {
  const data = localStorage.getItem('winners');
  if (data) {
    const parseData = JSON.parse(data);
    if (isDataWinner(parseData)) {
      stateRace.pageWinnersData.limit = parseData.limit;
      stateRace.pageWinnersData.page = parseData.page;
      stateRace.pageWinnersData.order = parseData.order;
      stateRace.pageWinnersData.sort = parseData.sort;
    }
  }
};

const createPaginationButtons = (parent: HTMLElement): void => {
  const PAGE = 1;
  const wrapper = createElement({
    tagName: 'div',
    parent,
    className: styles.wrapperButtons,
  });
  const previousButton = createElement({
    tagName: 'button',
    parent: wrapper,
    className: cssButton,
    text: 'prev',
  });
  const nextButton = createElement({
    tagName: 'button',
    parent: wrapper,
    className: cssButton,
    text: 'next',
  });
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
    saveDataWinners(stateRace.pageWinnersData);
    await winnersPage();
  });
  nextButton.addEventListener('click', async () => {
    stateRace.pageWinnersData.page = stateRace.pageWinnersData.page + PAGE;
    saveDataWinners(stateRace.pageWinnersData);
    await winnersPage();
  });
};

export const winnersPage = async (): Promise<void> => {
  cleanerElementFromChildren(mainElement);
  loadDataWinner();
  stateRace.state.winners = (await getWinners(stateRace.pageWinnersData)) || [];
  createElement({
    tagName: 'h1',
    className: 'visually-hidden',
    text: 'winner page async-race',
    parent: mainElement,
  });
  createElement({
    tagName: 'h2',
    text: `Winners (${stateRace.countWinner} cars)`,
    className: styles.title,
    parent: mainElement,
  });
  createElement({
    tagName: 'h3',
    text: `Page: ${stateRace.pageWinnersData.page}`,
    className: styles.title,
    parent: mainElement,
  });
  createPaginationButtons(mainElement);
  const wrapper = createElement({
    tagName: 'div',
    className: styles.wrapper,
    parent: mainElement,
  });

  createWinnersTable(wrapper);
};
