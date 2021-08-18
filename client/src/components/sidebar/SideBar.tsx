import React from 'react';

import { Button } from '@material-ui/core';
import styled from 'styled-components';

import { SideBarListItem } from '../helper/Helper';
import { CloseFriend } from '../closeFriend/CloseFriend';
import { Users } from '../DummyData';

const SideBarContainer = styled.div`
	flex: 3;
	height: calc(100vh - 100px);
	padding: 20px;
	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 5px;
	}

	::-webkit-scrollbar-track {
		background-color: #f1f1f1;
	}
	::-webkit-scrollbar-thumb {
		background-color: rgb(179, 179, 179);
	}
	@media (max-width: 800px) {
		display: none;
	}
`;

const SideBarLists = styled.ul`
	li {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
		.MuiSvgIcon-root {
			margin-right: 15px;
		}
	}
`;

const SideBarButton = styled.div`
	.MuiButton-root {
		padding: 10px;
		width: 150px;
		border-radius: 5px;
		font-weight: 600;
	}
`;

const HR = styled.hr`
	margin: 20px 0;
`;

export const SideBar = () => {
	return (
		<SideBarContainer>
			<SideBarLists>
				{SideBarListItem.list.map((item, index) => (
					<li className='sidebar__list-item' key={index}>
						{item.icon}
						<span className='sidebar__list-item-text'>{item.name}</span>
					</li>
				))}
			</SideBarLists>
			<SideBarButton>
				<Button variant='contained'>Show More</Button>
			</SideBarButton>
			<HR />
			<ul className='sidebar__friend-list'>
				{Users.userLists.map(u => (
					<CloseFriend key={u.id} user={u} />
				))}
			</ul>
		</SideBarContainer>
	);
};
