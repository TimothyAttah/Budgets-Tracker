import React from 'react'
import styled from 'styled-components';
import { Close } from '@material-ui/icons';
import { Divider, IconButton } from '@material-ui/core';

import { Modal } from '../../components/modal/Modal';
import { Backdrop } from '../../components/Backdrop';
import history from '../../history';
import { NotesForm } from '../../components/forms/NotesForm';

const NotesCreateContainer = styled.div`
  margin-top: 130px;
`;

const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const NotesCreate = () => {
  return (
		<NotesCreateContainer>
			<Backdrop close={() => history.push('/users/notes')} />
			<Modal>
				<Header>
					<h3>Write a note</h3>
					<IconButton onClick={() => history.push('/users/notes')}>
						<Close />
					</IconButton>
				</Header>
        <Divider />
        <NotesForm />
			</Modal>
		</NotesCreateContainer>
	);
}
