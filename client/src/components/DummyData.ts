import { PostLists, UserLists } from '../Interface';
import { images } from './images';

export const Users: UserLists = {
	userLists: [
		{
			id: 1,
			profilePicture: images.Alex,
			username: 'Victor Kaka',
		},
		{
			id: 2,
			profilePicture: images.Mary,
			username: 'Peter Parker',
		},
		{
			id: 3,
			profilePicture: images.JaneDoe,
			username: 'Sandra Lily',
		},
		{
			id: 4,
			profilePicture: images.ProfileIcon,
			username: 'Caleb Great',
		},
	],
};

export const Posts: PostLists = {
	posts: [
		{
			post_id: 1,
			desc: 'Love for all, Hatred for none',
			photo: images.PostOne,
			date: '5 mins ago',
			userId: 1,
			likes: [],
			comment: 9,
		},
		{
			post_id: 2,
			photo: images.PostTwo,
			date: '15 mins ago',
			userId: 2,
			likes: 2,
			comment: 1,
		},
		{
			post_id: 3,
			desc: 'This is just amazingly great',
			photo: images.PostThree,
			date: '9 mins ago',
			userId: 3,
			likes: 10,
			comment: 22,
		},
		{
			post_id: 4,
			desc: 'Happy new month everyone',
			photo: images.PostFour,
			date: '40 mins ago',
			userId: 4,
			likes: 35,
			comment: 28,
		},
	],
};
