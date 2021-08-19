import styled from 'styled-components';

export const NoteContainer = styled.div`
	max-width: 600px;
	width: 100%;
	-webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
	box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
	margin: 20px 0;
	padding: 10px;
	border-radius: 20px;
	background-color: #e5e5e5;
	@media (min-width: 800px) {
		max-width: 800px;
	}
`;

export const NoteContainerPrimary = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const NoteTop = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 20px;
	border: 2px solid red;
	a .MuiAvatar-colorDefault {
		color: var(--clr-dark);
	}
	a img {
		width: 100%;
		object-fit: cover;
	}
	h3 a {
		/* width: 150px; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
		margin-bottom: 5px;
		text-align: center;
		text-shadow: -3px -3px 3px #fff7, 3px 3px 3px #0003;
	}
	@media (min-width: 800px) {
		width: 400px;
	}
	@media (max-width: 800px) {
		h3 a {
			font-size: 1rem;
			width: 150px;
		}
	}
	@media (max-width: 400px) {
		h3 a {
			font-size: 1rem;
			width: 100px;
		}
	}
	@media (max-width: 280px) {
		text-align: center;
		h3 a {
			font-size: 0.7rem;
			width: 70px;
		}
	}
`;

export const NoteCenter = styled.div`
	max-width: 450px;
	padding: 10px;
	width: 100%;
	box-shadow: -5px -5px 5px #fff7, 5px 5px 5px #0002;
	border-radius: 20px;
	background-color: #e5e5e5;
	h2 {
		text-shadow: -3px -3px 3px #fff7, 3px 3px 3px #0003;
		padding-bottom: 5px;
	}
	p {
		width: 100%;
		padding-top: 15px;
	}
	.top__date {
		display: none;
	}
	@media (max-width: 600px) {
		.top__date {
			display: block;
			padding: 5px 0;
		}
		h2 {
			font-size: 1.5rem;
		}
	}
	@media (max-width: 320px) {
		h2 {
			font-size: 1.2rem;
		}
	}
	@media (max-width: 280px) {
		h2 {
			font-size: 0.8rem;
		}
	}
`;

export const NoteCenterBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 20px;
	@media (max-width: 600px) {
		a .MuiButton-root {
			padding: 5px;
			font-size: 12px;
			text-transform: capitalize;
		}
		small {
			display: none;
		}
	}
	@media (max-width: 375px) {
		a .MuiButton-root {
			padding: 3px;
			font-size: 10px;
			font-weight: 600;
		}
	}
`;

export const NoteBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 460px) {
		font-size: 12px;
		.MuiSvgIcon-root {
			font-size: 15px;
		}
	}
`;