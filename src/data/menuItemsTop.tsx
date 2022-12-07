import { ReactComponent as Brotli } from '../assets/icons/logos-brotli.svg';
import { ReactComponent as Trello } from '../assets/icons/trello.svg';
import { ReactComponent as Home } from '../assets/icons/home.svg';
import { ReactComponent as Settings } from '../assets/icons/settings.svg';

interface MenuItemsTop {
  logo: JSX.Element;
  text: string;
  route: string;
}

export const menuItemsTop: MenuItemsTop[] = [
  {
    logo: <Brotli />,
    text: 'YellowTech Inc.',
    route: '/workspace/info',
  },
  {
    logo: <Trello />,
    text: 'Personal Board',
    route: '/workspace/info',
  },
  {
    logo: <Home />,
    text: 'Dashboard',
    route: '/dashboard',
  },
  {
    logo: <Settings />,
    text: 'Space Settings',
    route: '/workspace/info',
  },
];
