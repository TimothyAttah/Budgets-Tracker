import { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Drawer, IconButton } from '@material-ui/core';
import { AddCircle, Menu } from '@material-ui/icons';

import { navMenu } from '../helper/Helper';
import { NavCenter, NavRight, NavContainer, ActiveLink } from './NavStyles';

export const Nav: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleDrawer = () => {
		setIsOpen(true);
	};
	return (
		<div>
			<NavContainer>
				<div>
					<IconButton onClick={handleDrawer}>
						<Menu htmlColor='white' />
					</IconButton>
				</div>
				<NavCenter>
					{navMenu.nav.map((item, index) => {
						return (
							<li key={index}>
								<NavLink to={item.path} exact activeStyle={ActiveLink}>
									{item.name}
									<span>{item.icon}</span>
								</NavLink>
							</li>
						);
					})}
				</NavCenter>
				<NavRight className='nav__right'>
					<Link to='/users/notes/create/note'>
						<Button variant='contained'>
							<AddCircle />
							<span className='txt'>Create Note</span>
						</Button>
					</Link>
				</NavRight>
			</NavContainer>
			<Drawer anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
				<div className='drawer__container'>
					<ul>
						{navMenu.nav.map((item, index) => {
							return (
								<li key={index}>
									<NavLink to={item.path} exact>
										{item.name}
										<span>{item.icon}</span>
									</NavLink>
								</li>
							);
						})}
					</ul>
				</div>
			</Drawer>
		</div>
	);
};
