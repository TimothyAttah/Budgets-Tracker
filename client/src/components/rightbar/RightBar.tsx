import { FC } from 'react';
import { images } from '../images';
import { Users } from '../DummyData';
import { Online } from '../online/Online';
import { Cake } from '@material-ui/icons';
import {
	RightBarContainer,
	RightBarContainerWrapper,
	BirthDayContainer,
	ProfileRightBarContainer,
	RightBarInfoItem,
	RightBarFollowing,
	RightBarFollowings,
	RightBarInfo,
} from './Styles';

interface RightBarProps {
  profile?: boolean
}

export const RightBar: FC<RightBarProps > = ({ profile }) => {
	const HomeRightBar = () => {
		return (
			<RightBarContainerWrapper>
				<BirthDayContainer>
					<div>
						<Cake />
					</div>
					<span>
						<b>Kyle Thompson</b> and {''}
						<b>3 other friends</b> have a birthday today.
					</span>
				</BirthDayContainer>
				<img src={images.PostFour} alt='' className='rightbar__img' />
				<h4>Online Friends</h4>
				<ul>
					{Users.userLists.map(u => (
						<Online key={u.id} user={u} />
					))}
				</ul>
			</RightBarContainerWrapper>
		);
	};

	const ProfileRightBar = () => {
		return (
			<ProfileRightBarContainer>
				<h4>User Information</h4>
				<RightBarInfo>
					<RightBarInfoItem>
						<span className='rightbar__info-key'>City:</span>
						<span className='rightbar__info-value'>Lagos</span>
					</RightBarInfoItem>
					<RightBarInfoItem>
						<span className='rightbar__info-key'>From:</span>
						<span className='rightbar__info-value'>Nigeria</span>
					</RightBarInfoItem>
					<RightBarInfoItem>
						<span className='rightbar__info-key'>Relationship:</span>
						<span className='rightbar__info-value'>Single</span>
					</RightBarInfoItem>
				</RightBarInfo>
				<h4 className='rightbar__title-profile'>User Friends</h4>
				<RightBarFollowings>
					<RightBarFollowing>
						<img src={images.Naruto} alt='' />
						<span>John Carter</span>
					</RightBarFollowing>
					<RightBarFollowing>
						<img src={images.Mary} alt='' />
						<span>John Carter</span>
					</RightBarFollowing>
					<RightBarFollowing>
						<img src={images.Alex} alt='' />
						<span>John Carter</span>
					</RightBarFollowing>
					<RightBarFollowing>
						<img src={images.JaneDoe} alt='' />
						<span>John Carter</span>
					</RightBarFollowing>
					<RightBarFollowing>
						<img src={images.Soka} alt='' />
						<span>John Carter</span>
					</RightBarFollowing>
					<RightBarFollowing>
						<img
							src={images.ProfileIcon}
							alt=''
							className='rightbar__following-img'
						/>
						<span className='rightbar__following-name'>John Carter</span>
					</RightBarFollowing>
				</RightBarFollowings>
			</ProfileRightBarContainer>
		);
	};
	return (
		<RightBarContainer>
			{profile ? <ProfileRightBar /> : <HomeRightBar />}
		</RightBarContainer>
	);
};
