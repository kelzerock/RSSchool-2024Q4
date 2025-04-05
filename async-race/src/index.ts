import { handleLocation, route } from './router/router';
import { stateRace } from './state/state';
import './styles.css';

const startApp = async (): Promise<void> => {
  await stateRace.getCars();
  globalThis.addEventListener('popstate', handleLocation);
  globalThis.route = route;

  handleLocation();
  console.log(stateRace.state);
};

startApp();
