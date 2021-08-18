import React, { useState } from 'react';
import { Avatar, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import history from '../../history';
import {nameToInitials, fullName,  } from '../NameInitials';
// import { useDispatch } from 'react-redux'
// import { logout } from '../../redux/actions/authActions'
// import {user} from '../../App'

const NameContainer = styled.h3`
  padding-right: 15px;
  color: var(--clr-light);
  @media(max-width:700px){
    display: none;
  }
`;

const ProfileModal = () => {
  // const dispatch = useDispatch()
  const [ auth, setAuth ] = useState( true );
  const [ anchorEl, setAnchorEl ] = useState( null );
	const open = Boolean( anchorEl );
	const [ user, setUser ] = useState( true );

  const handleMenu = ( event ) => {
    setAnchorEl( event.currentTarget );
	};
	
	 const [isOpen, setIsOpen] = useState(false);
		const handleDrawer = () => {
			setIsOpen(true);
		};

  const handleClose = () => {
    setAnchorEl( false);
    // window.location.reload( false )
    setAuth(false)
  };

  const handleLogout = () => {
    localStorage.clear();
    // dispatch(logout())
    history.push( '/user/signin' )
    // window.location.reload( false );
  }

  return (
		<div>
			{auth && (
				<div>
					{user && (
						<IconButton
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							// onClick={handleMenu}
							onClick={handleDrawer}
							color='inherit'
							style={{ padding: '0' }}
						>
							<NameContainer>{fullName} </NameContainer>
							<Avatar>
								{user.results?.profilePicture
									? user.results?.profilePicture
									: nameToInitials(fullName)}
							</Avatar>
						</IconButton>
					)}
					<Menu
						id='menu-appbar'
						// anchorEl={anchorEl}
						anchorEl={isOpen}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={isOpen}
						// onClose={handleClose}
						onClose={() => setIsOpen(false)}
					>
						<MenuItem onClick={handleClose}>
							<Link to='/user/profile'>Profile</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link to='/user/friends/profile'>Friends Posts</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Button
								variant='contained'
								color='secondary'
								onClick={handleLogout}
							>
								Log Out
							</Button>
						</MenuItem>
					</Menu>
				</div>
			)}
		</div>
	);
};

export default ProfileModal;
