import React, { useEffect, useState } from 'react';
import { Person } from '@material-ui/icons';
import { Avatar, Fab, Divider, Button } from '@material-ui/core';
// import { useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import axios from 'axios';
import styled from 'styled-components';
import { Header } from '../../components/header/Header';
import { SideBar } from '../../components/sidebar/SideBar';
import { user, fullName } from '../../components/NameInitials';
import { images } from '../../components/images';
import { Feed } from '../../components/feed/Feed';
import { RightBar } from '../../components/rightbar/RightBar';
// import { listPost } from '../../redux/actions/posts';

const ProfileContainer = styled.div`
  margin-top: 120px;
	display: flex;
`;
const ProfileRight = styled.div`
	flex: 9;
`;
const ProfileCover = styled.div`
	height: 410px;
	position: relative;
	img {
		width: 100%;
		height: 350px;
		background-size: cover;
	}
	.profile__user-img,
	.MuiAvatar-root {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		object-fit: cover;
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		top: 250px;
		border: 3px solid #fff;
		.MuiSvgIcon-root {
			font-size: 100px;
		}
	}
`;

const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  padding-bottom: 10px;
`;

const ProfileInfoPrimary = styled.div`
  width: 600px;
	display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 10px;
  .MuiFab-root {
    margin-right: 10px;
  }
  @media (max-width: 600px){
    width: 90%;
  }
  @media (max-width: 320px){
    font-size: 15px;
  }
`;

export const Profile = () => {
	const [showFollow, setShowFollow] = useState({});

	return (
		<>
			<Header />
			<ProfileContainer>
				<SideBar />
				<ProfileRight>
					<div className='profile_right-top'>
						<ProfileCover>
							<img src={images.PostOne} alt='' className='profile__cover-img' />
							{/* <img
								src={
									user.results?.coverPicture
										? user.results?.coverPicture
										: images.PostOne
								}
								alt=''
								className='profile__cover-img'
							/> */}
							<Avatar>
								<Person />
							</Avatar>

							{/* {!user.results.profilePicture ? (
								<img
									src={user.results.profilePicture}
									alt=''
									className='profile__user-img'
								/>
							) : (
								<Avatar>
									<Person />
								</Avatar>
							)} */}
						</ProfileCover>
						<ProfileInfo>
							<h1 className='profile__info-name'>{fullName}</h1>
							<h4>jane@gmail.com</h4>
							{/* <h4>{user.results.email}</h4> */}
							<span className='profile__info-desc'>
								Wow welcome to my profile
							</span>
							{/* <span className='profile__info-desc'>{user.results?.desc}</span> */}
						</ProfileInfo>
						<Divider />
						<ProfileInfoPrimary>
							{/* <h4>
								<span>
									<Fab color='secondary'>{notes.length}</Fab>
								</span>
								Posts
							</h4> */}

							<h4>
								<span>
									{/* <Fab color='secondary'>{user.results.followers.length}</Fab> */}
									<Fab color='secondary'>33</Fab>
								</span>
								Followers
							</h4>
							<h4>
								<span>
									<Fab color='secondary'>100</Fab>
								</span>
								Following
							</h4>
							<div>
								{showFollow ? (
									<Button variant='contained' color='primary'>
										Follow
									</Button>
								) : (
									<Button variant='contained' color='primary'>
										Unfollow
									</Button>
								)}
							</div>
						</ProfileInfoPrimary>
					</div>
					<ProfileContainer>
						<Feed />
						<RightBar profile />
					</ProfileContainer>
				</ProfileRight>
			</ProfileContainer>
		</>
	);
};
