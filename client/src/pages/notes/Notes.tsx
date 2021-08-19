import styled from 'styled-components';
import { NotesLists } from './NotesLists';

const NotesContainer = styled.div`
	margin-top: 150px;
`;

export const Notes = () => {
	return (
		<>
			<NotesContainer>
        <NotesLists />
			</NotesContainer>
		</>
	);
};
