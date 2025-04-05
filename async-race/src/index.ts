import { handleLocation, route } from './router/router';
import './styles.css';

globalThis.addEventListener('popstate', handleLocation);
globalThis.route = route;

handleLocation();
