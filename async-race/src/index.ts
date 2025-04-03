import { handleLocation } from './router/router';
import './styles.css';

globalThis.addEventListener('popstate', handleLocation);

handleLocation();
