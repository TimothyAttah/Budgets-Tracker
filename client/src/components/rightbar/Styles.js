import styled from 'styled-components';

export const RightBarContainerWrapper = styled.div`
	.rightbar__img {
		width: 100%;
		border-radius: 10px;
		margin: 30px 0;
	}
	h4 {
		margin-top: 10px;
		margin-bottom: 20px;
	}
`;

export const RightBarContainer = styled.div`
	flex: 3.5;
	padding: 20px 20px 0 0;
  @media (max-width:600px){
    display: none;
  }
`;

export const BirthDayContainer = styled.div`
	display: flex;
	align-items: center;
	.MuiSvgIcon-root {
		color: red;
		font-size: 40px;
		margin-right: 10px;
	}
	span {
		font-weight: 300;
		font-size: 15px;
	}
`;

export const ProfileRightBarContainer = styled.div`
	h4 {
		font-size: 18px;
		font-weight: 600;
		margin-bottom: 15px;
	}
`;

export const RightBarInfo = styled.div`
	margin-bottom: 30px;
`;
export const RightBarInfoItem = styled.div`
	margin-bottom: 10px;
	.rightbar__info-key {
		font-weight: 600;
		margin-right: 15px;
		color: #555;
	}

	.rightbar__info-value {
		font-weight: 300;
	}
`;

export const RightBarFollowings = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`;
export const RightBarFollowing = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;
	margin: 0 10px;
	margin-bottom: 20px;
	img {
		width: 100px;
		height: 100px;
		object-fit: cover;
		border-radius: 5px;
	}
	span {
		padding-top: 5px;
		font-weight: 600;
	}
`;
