import {
	AttachMoneyOutlined,
	Event,
	ListAlt,
	Notes,
	Settings,
	// Bookmark,
	// Chat,
	// Group,
	// HelpOutline,
	// PlayCircleFilledOutlined,
	// RssFeed,
	// School,
	// WorkOutline,
	// Delete,
	// Edit,
	// PrintDisabled,
} from '@material-ui/icons';

interface Menu {
  name: string;
  icon: any;
  path: string
}

type NavLists = {
  nav: Menu[]
}


export const navMenu: NavLists = {
	nav: [
		{
			name: 'Notes',
			icon: <Notes />,
			path: '/users/notes',
    },
    {
      name: 'Todos',
      icon: <ListAlt />,
      path: '/users/todos'
    },
    {
      name: 'Budgets',
      icon: <AttachMoneyOutlined />,
      path: '/users/budgets'
    },
    {
      name: 'Events',
      icon: <Event />,
      path: '/users/events'
    },
    {
      name: 'Settings',
      icon:<Settings />,
      path: '/users/settings'
    },
	],
};
