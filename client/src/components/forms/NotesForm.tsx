import React, { useState, useEffect, FormEvent } from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Save } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

import { noteCreate } from '../../redux/actions/notes';
import { v4 } from 'uuid';
import { NotesList } from '../../redux/interface';
import history from '../../history';

const FormContainer = styled.form`
	box-sizing: border-box;
	margin-top: 50px;
	label {
		font-weight: bold;
	}

	input,
	textarea {
		width: 95%;
		display: block;
		margin: 5px 0;
		padding: 15px;
		border: 1px solid #ccc;
		outline: none;
		border-radius: 4px;
	}

	input {
		margin-bottom: 30px;
	}

	button {
		margin-top: 20px;
	}
`;

export const NotesForm = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const dispatch = useDispatch();
	// const { noteId } = useParams();
	// const note = useSelector(state =>
	// 	noteId ? state.notesReducer.notes.find(note => note._id === noteId) : null
	// );

	// useEffect(() => {
	// 	if (note) setTitle(note.title);
	// 	if (note) setContent(note.content);
	// }, [noteId, note]);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
    const newNote: NotesList = {
      _id: v4(),
			title,
      content,
      createdAt: new Date(),
      profilePicture: '',
      name: 'Tosin Love'
    };

    dispatch(noteCreate(newNote));
    history.push('/users/notes')

		// if (noteId) {
		// 	dispatch(notesEdit(noteId, newNote));
		// } else {
		// 	dispatch(notesCreate(newNote));
		// }
	};
	return (
		<div>
			<FormContainer onSubmit={handleSubmit}>
				<label htmlFor='title'>Note Title:</label>
				<input
					id='title'
					name='title'
					placeholder='Enter your note title'
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<label htmlFor='content'>Note Content:</label>
				<textarea
					id='content'
					name='content'
					rows={20}
					cols={6}
					placeholder='Enter your note contents here...'
					value={content}
					onChange={e => setContent(e.target.value)}
				/>
				<Button
					variant='contained'
					color='primary'
					size='medium'
					type='submit'
					startIcon={<Save />}
				>
          {/* {noteId ? 'Edit Note' : ' Create Note'} */}
          Create Note
				</Button>
			</FormContainer>
		</div>
	);
};
