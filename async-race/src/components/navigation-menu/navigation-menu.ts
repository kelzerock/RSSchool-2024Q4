import { PathRoute } from '../../enums/path-routes';
import { stateRace } from '../../state/state';
import { createElement } from '../../utils/create-element';

type InformationAboutLinks = {
  href: PathRoute;
  text: string;
};

const styles = {
  navigation: 'flex ',
  listOfLinks: 'flex bg-red-700 p-2 rounded-lg',
  linkItem: '',
  linkAnchor:
    'flex bg-red-800 rounded-md px-3 py-2 mx-3 text-xl font-bold uppercase text-red-990 hover:bg-red-900 hover:text-red-100 transition-colors duration-300 ',
};

const menuItems: InformationAboutLinks[] = [
  { href: PathRoute.home, text: 'garage' },
  { href: PathRoute.winners, text: 'winners' },
];

export const createNavigationMenu = (parent: HTMLElement): void => {
  parent.append(navigationMenu(menuItems));
};

const handleResetClick = async (): Promise<void> => {
  stateRace.viewStateModels.forEach((car) => {
    car.stopButton.click();
  });
};

const navigationMenu = (links: InformationAboutLinks[]): HTMLElement => {
  const navigation = createElement({
    tagName: 'nav',
    className: styles.navigation,
  });
  const listOfLinks = createElement({
    tagName: 'ul',
    parent: navigation,
    className: styles.listOfLinks,
  });
  links.forEach((link) => {
    const linkItem = createElement({
      tagName: 'li',
      parent: listOfLinks,
      className: styles.linkItem,
    });
    const linkAnchor = createElement({
      tagName: 'a',
      parent: linkItem,
      text: link.text,
      className: styles.linkAnchor,
      attributes: [{ attr: 'href', value: link.href }],
    });

    linkAnchor.addEventListener('click', async (event) => {
      await handleResetClick();

      route(event);
    });
  });

  return navigation;
};
