import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { Users } from '../../Interface';

const CloseFriendList = styled.li`
	display: flex;
	align-items: center;
	margin-bottom: 15px;
	img {
		width: 32px;
		height: 32px;
		clip-path: circle();
		border-radius: 50%;
		object-fit: cover;
		margin-right: 10px;
	}
`;

interface CloseFriendProps {
  user: Users
}

export const CloseFriend:FC<CloseFriendProps> = ({ user }) => {
	return (
		<CloseFriendList>
			<img src={user.profilePicture} alt='' />
			<span>{user.username}</span>
		</CloseFriendList>
	);
};
