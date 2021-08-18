import styled from 'styled-components';

export const PostContainer = styled.div`
	width: 100%;
	border-radius: 10px;
	-webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
	box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
	margin: 30px 0;
	padding: 10px;
`;

export const PostWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const PostTopLeft = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	img {
		width: 32px;
		height: 32px;
		clip-path: circle();
		object-fit: cover;
	}
	.post__username {
		font-size: 15px;
		font-weight: 600;
		margin: 0 10px;
	}

	.post__date {
		font-size: 12px;
	}
	.MuiSvgIcon-root {
		border: 2px solid black;
		border-radius: 50%;
		color: #fff;
		background-color: #000;
		width: 28px;
		height: 28px;
	}
`;

export const PostCenter = styled.div`
	margin: 20px 0;
	img {
		margin-top: 20px;
		width: 100%;
		max-height: 500px;
		object-fit: contain;
	}
`;

export const PostBottomLeft = styled.div`
	display: flex;
	align-items: center;
	span {
		font-size: 15px;
	}
	.blue__icon {
		background-color: var(--clr-lightBlue);
		:hover {
			background-color: var(--clr-lightBlue);
		}
	}
	.red__icon {
		background-color: var(--clr-accent);
		:hover {
			background-color: var(--clr-accent);
		}
	}
	.MuiIconButton-root {
		padding: 5px;
		margin-right: 5px;

		.MuiSvgIcon-root {
			font-size: 16px;
		}
	}
`;


export const PostBottomRight = styled.div`
	cursor: pointer;
	font-size: 15px;
`;
