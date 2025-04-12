import { handleLocation, route } from './router/router';
import { stateRace } from './state/state';
import './styles.css';
import { getCars } from './utils/request/get-cars';

const startApp = async (): Promise<void> => {
  const cars = await getCars();
  if (cars) {
    stateRace.getCars(cars);
  }
  globalThis.addEventListener('popstate', handleLocation);
  globalThis.route = route;

  handleLocation();
};

startApp();
