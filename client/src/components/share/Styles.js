import styled from 'styled-components';

export const ShareContainer = styled.div`
	width: 100%;
	/* height: 170px; */
	border-radius: 10px;
	-webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
	box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
	padding: 10px;
	@media (max-width: 600px) {
		width: 95%;
		margin: 0 auto;
		/* height: 200px; */
	}
	@media (max-width: 320px) {
		height: 180px;
	}
`;

export const ShareTop = styled.div`
	display: flex;
	align-items: center;

	img,
	.MuiSvgIcon-root {
		width: 50px;
		height: 50px;
		clip-path: circle();
		object-fit: cover;
		margin-right: 10px;
	}
	input {
		width: 80%;
		border: none;
	}
	.MuiSvgIcon-root {
		border: 2px solid black;
		border-radius: 50%;
		color: #fff;
		background-color: #000;
		width: 40px;
		height: 40px;
	}
`;

export const HR = styled.hr`
	margin: 20px;
`;

export const ShareBottom = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 600px) {
		width: 100%;
	}
`;
export const ShareOptions = styled.div`
	display: flex;
	margin-left: 20px;
	@media (max-width: 400px) {
		flex-wrap: wrap;
		align-items: center;
	}
`;
export const ShareOption = styled.div`
	display: flex;
	align-items: center;
	margin-right: 15px;
	cursor: pointer;
	.MuiSvgIcon-root {
		font-size: 18px;
		margin-right: 3px;
	}
	span {
		font-size: 14px;
		font-weight: 600;
	}
	@media (max-width: 600px) {
		flex-direction: column;
		flex-wrap: wrap;
	}
	@media (max-width: 320px) {
		span {
			display: none;
		}
		.MuiSvgIcon-root {
			font-size: 25px;
			margin-right: 10px;
			margin-bottom: 10px;
		}
	}
`;
export const FileLabel = styled.label`
	display: flex;
	align-items: center;
	margin-right: 15px;
	cursor: pointer;
	.MuiSvgIcon-root {
		font-size: 18px;
		margin-right: 3px;
	}
	span {
		font-size: 14px;
		font-weight: 600;
	}
	input {
		display: none;
	}
	@media (max-width: 600px) {
		flex-direction: column;
		flex-wrap: wrap;
	}
	@media (max-width: 320px) {
		span {
			display: none;
		}
		.MuiSvgIcon-root {
			font-size: 25px;
			margin-right: 10px;
			margin-bottom: 10px;
		}
	}
`;

export const ShareButton = styled.div`
	.MuiButton-root {
		padding: 7px;
		border-radius: 5px;
		background-color: green;
		font-weight: 600;
		margin-right: 20px;
		color: #fff;
		text-transform: capitalize;
		:hover {
			background-color: green;
		}
	}
`;

export const ShareImgContainer = styled.div`
	padding: 0 20px 10px 20px;
	position: relative;
	img {
		width: 100%;
		object-fit: cover;
	}
	.MuiSvgIcon-root {
		position: absolute;
		top: 0;
		right: 20px;
		cursor: pointer;
		opacity: 0.7;
		color: #fff;
	}
`;
