import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Book, Chat, Notifications, Person, Search } from '@material-ui/icons';

import ProfileModal from '../modal/ProfileModal';
import {
	MainHeaderContainer,
	HeaderLeftPrimary,
	HeaderContainer,
	HeaderIconsItem,
	HeaderCenter,
	HeaderLeft,
	HeaderRight,
	HeaderRightLink,
} from './MainHeaderStyles';

export const MainHeader: FC = () => {
	return (
		<MainHeaderContainer>
			<HeaderContainer>
				<HeaderLeft>
					<Link to='/'>
						<h1>Note3Sixty</h1>
					</Link>
				</HeaderLeft>
				<HeaderLeftPrimary>
					<Link to='/'>
						<Book />
					</Link>
				</HeaderLeftPrimary>
				<HeaderCenter>
					<Search />
					<input placeholder='Search...' />
				</HeaderCenter>
				<HeaderRight>
					<HeaderRightLink>
						<span>Homepage</span>
						<span>Timeline</span>
					</HeaderRightLink>
					<HeaderRight>
						<HeaderIconsItem>
							<Person />
							<span>1</span>
						</HeaderIconsItem>
						<HeaderIconsItem>
							<Chat />
							<span>256</span>
						</HeaderIconsItem>
						<HeaderIconsItem>
							<Notifications />
							<span>70</span>
						</HeaderIconsItem>
					</HeaderRight>
				</HeaderRight>
				<ProfileModal />
			</HeaderContainer>
		</MainHeaderContainer>
	);
};
