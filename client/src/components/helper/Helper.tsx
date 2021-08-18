import {
	AttachMoneyOutlined,
	Event,
	ListAlt,
	Notes,
	Settings,
	Bookmark,
	Chat,
	Group,
	HelpOutline,
	PlayCircleFilledOutlined,
	RssFeed,
	School,
	WorkOutline,
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

export const SideBarListItem = {
	list: [
		{
			name: 'Feed',
			icon: <RssFeed />,
			url: '/users/notes',
		},
		{
			name: 'Chats',
			icon: <Chat />,
			url: '/users/notes',
		},
		{
			name: 'Videos',
			icon: <PlayCircleFilledOutlined />,
			url: '/users/notes',
		},
		{
			name: 'Group',
			icon: <Group />,
			url: '/users/notes',
		},
		{
			name: 'Bookmarks',
			icon: <Bookmark />,
			url: '/users/notes',
		},
		{
			name: 'Questions',
			icon: <HelpOutline />,
			url: '/users/notes',
		},
		{
			name: 'Jobs',
			icon: <WorkOutline />,
			url: '/users/notes',
		},
		{
			name: 'Events',
			icon: <Event />,
			url: '/users/notes',
		},
		{
			name: 'Courses',
			icon: <School />,
			url: '/users/notes',
		},
	],
};

