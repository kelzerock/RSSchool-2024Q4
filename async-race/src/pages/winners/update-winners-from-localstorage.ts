import { Localstorage } from '../../enums/localstorage';
import { stateRace } from '../../state/state';
import { isPageDataParameters } from '../../utils/is-page-data-parameters';
import { loadFromLocalstorage } from '../../utils/load-from-localstorage';

export const updataWinnersFromLocalstorage = (): void => {
  const saveWinners = loadFromLocalstorage(Localstorage.winners);
  if (isPageDataParameters(saveWinners)) {
    stateRace.pageWinnersData.limit = saveWinners.limit;
    stateRace.pageWinnersData.page = saveWinners.page;
    stateRace.pageWinnersData.order = saveWinners.order;
    stateRace.pageWinnersData.sort = saveWinners.sort;
  }
};
