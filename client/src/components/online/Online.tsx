import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { Users } from '../../Interface';

const OnlineFriendContainer = styled.li`
	display: flex;
	align-items: center;
	margin-bottom: 15px;
	span {
		font-weight: 600;
	}
`;

const OnlineFriend = styled.div`
	margin-right: 10px;
	position: relative;

	img {
		width: 40px;
		height: 40px;
		clip-path: circle();
		object-fit: cover;
	}
	span {
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background-color: limegreen;
		position: absolute;
		top: -3px;
		right: 0;
		border: 2px solid #fff;
	}
`;

interface OnlineProps {
  user: Users
}

export const Online: FC<OnlineProps > = ({ user }) => {
	return (
		<OnlineFriendContainer>
			<OnlineFriend>
				<img src={user.profilePicture} alt='' />
				<span></span>
			</OnlineFriend>
			<span>{user.username}</span>
		</OnlineFriendContainer>
	);
};
