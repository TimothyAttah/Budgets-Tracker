import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Divider, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { format, TDate } from 'timeago.js';
import { ThumbUp, Person, MoreVert } from '@material-ui/icons';

import { notesLists } from "../../redux/actions/notes";
import { StoreState } from "../../redux/reducers";
import { ReadMore } from "../../components/ReadMore";
import {
  NoteBottom,
  NoteCenter,
  NoteCenterBottom,
  NoteContainer,
  NoteContainerPrimary,
  NoteTop,
} from './NotesListStyles';


export const NotesLists: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(notesLists())
  }, [dispatch]);
  const {notes} = useSelector((state: StoreState) => state.notes);
  console.log(notes);
  
  return (
		<>
			{notes.length ? (
				notes.map(note => (
					<NoteContainer>
						<NoteContainerPrimary key={note._id} className='notes__container'>
							<NoteTop className='notes__top'>
								<Link to='/users/profile/username'>
									{note.profilePicture ? (
										<Avatar>
											<img src={note.profilePicture} alt='' />
										</Avatar>
									) : (
										<Avatar>
											<Person />
										</Avatar>
									)}
								</Link>
								<h3>
									<Link to='/users/profile/username'>{note.name}</Link>
								</h3>
								<h5>100 Followers</h5>
							</NoteTop>
							<NoteCenter className='note__center'>
								<h2>{note.title}</h2>
								<small className='top__date'>{format(note.createdAt as TDate)}</small>
								<Divider />
								<ReadMore>{note.content}</ReadMore>
								<NoteCenterBottom className='note__center-button'>
									<Link to='/users/notes'>
										<Button variant='contained'>Read More</Button>
									</Link>
									<small>{format(note.createdAt as TDate)}</small>
									<IconButton>
										<MoreVert />
									</IconButton>
								</NoteCenterBottom>
								<Divider />
								<NoteBottom>
									<NoteBottom className='note__bottom-likes'>
										<IconButton>
											<ThumbUp />
										</IconButton>
										<h4>45 likes</h4>
									</NoteBottom>
									<div className='note__bottom-comments'>
										<h4>123 Comments</h4>
									</div>
								</NoteBottom>
							</NoteCenter>
						</NoteContainerPrimary>
						{/* <NoteBottom>
							<NoteBottom className='note__bottom-likes'>
								<IconButton>
									<ThumbUp />
								</IconButton>
								<h4>45 likes</h4>
							</NoteBottom>
							<div className='note__bottom-comments'>
								<h4>123 Comments</h4>
							</div>
						</NoteBottom> */}
					</NoteContainer>
				))
			) : (
				<div>
					<h2>You have no notes</h2>
				</div>
			)}
		</>
	);
}
