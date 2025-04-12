import { mainElement } from '../../components/main-elements/main-elements';
import { stateRace } from '../../state/state';
import type { DataToCreateElement } from '../../types/data-to-create-element';
import { cleanerElementFromChildren } from '../../utils/cleaner-element-from-children';
import { createElement } from '../../utils/create-element';
import { getWinners } from '../../utils/request/get-winners';
import { createPaginationButtons } from './create-pagination-buttons';
import { updataWinnersFromLocalstorage } from './update-winners-from-localstorage';
import { createWinnersTable } from './winners-table';

const styles = {
  title: 'text-2xl',
  wrapper: 'flex flex-col bg-stone-400 rounded-lg p-2',
};

const dataForElements: [
  DataToCreateElement<'h1'>,
  DataToCreateElement<'h2'>,
  DataToCreateElement<'h3'>,
  DataToCreateElement<'div'>,
] = [
  {
    tagName: 'h1',
    className: 'visually-hidden',
    text: 'winner page async-race',
  },
  {
    tagName: 'h2',
    text: `Winners (${stateRace.countWinner} cars)`,
    className: styles.title,
  },
  {
    tagName: 'h3',
    text: `Page: ${stateRace.pageWinnersData.page}`,
    className: styles.title,
  },
  {
    tagName: 'div',
    className: styles.wrapper,
  },
];

export const winnersPage = async (): Promise<void> => {
  cleanerElementFromChildren(mainElement);
  updataWinnersFromLocalstorage();

  stateRace.state.winners = (await getWinners(stateRace.pageWinnersData)) || [];

  createElement({ ...dataForElements[0], parent: mainElement });
  createElement({ ...dataForElements[1], parent: mainElement });
  createElement({ ...dataForElements[2], parent: mainElement });

  createPaginationButtons(mainElement);
  const wrapper = createElement({ ...dataForElements[3], parent: mainElement });

  createWinnersTable(wrapper);
};
