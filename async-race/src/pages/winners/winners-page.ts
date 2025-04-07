import { mainElement } from '../../components/main-elements/main-elements';
import { stateRace } from '../../state/state';
import { cleanerElementFromChildren } from '../../utils/cleaner-element-from-children';
import { createElement } from '../../utils/create-element';
import { getWinners } from '../../utils/request/get-winners';
import { createWinnersTable } from './winners-table';

const styles = {
  title: 'text-2xl',
  wrapper: 'flex flex-col bg-stone-400 rounded-lg p-2',
};

export const winnersPage = async (): Promise<void> => {
  cleanerElementFromChildren(mainElement);
  createElement({
    tagName: 'h1',
    className: 'visually-hidden',
    text: 'winner page async-race',
    parent: mainElement,
  });
  createElement({
    tagName: 'h2',
    text: 'Winners',
    className: styles.title,
    parent: mainElement,
  });
  const wrapper = createElement({
    tagName: 'div',
    className: styles.wrapper,
    parent: mainElement,
  });

  await getWinners();
  createWinnersTable(wrapper);
  console.log(stateRace.state.winners);
};
