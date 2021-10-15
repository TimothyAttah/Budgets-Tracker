import styled from 'styled-components';

export const FormContainer = styled.div`
	background: #80808038;
	padding: 0 15px;
`;

export const FormContainerPrimary = styled.div`
	max-width: 600px;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 0 auto;
	padding: 20px 0;

	.btn_red {
		background-color: transparent;
		color: red;
		border-radius: 50%;
		border: 1px solid #ff5049;
		padding: 5px 10px;
		:hover {
			background-color: #ff5049;
			color: var(--clr-light);
			opacity: 0.9;
		}
	}

	.btn_green {
		background-color: transparent;
		color: #008074;
		border-radius: 50%;
		border: 1px solid #008074;
		padding: 5px 10px;
		:hover {
			background-color: #008074;
			color: var(--clr-light);
			opacity: 0.9;
		}
	}
	@media (max-width: 768px) {
		.btn_green,
		.btn_red {
			min-width: 34px;
		}
	}
`;

export const FormContainerLeft = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	.MuiSvgIcon-root{
		font-size: 2rem;
	}
`;

export const FormContainerRight = styled.form`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	input {
		padding: 15px;
		border-radius: 5px;
	}
	.income_text {
		width: 60%;
		border: 1px solid #008074;
	}
	.income_value {
		width: 25%;
		border: 1px solid #008074;
	}
	.expenses_text {
		width: 60%;
		border: 1px solid #ff5049;
	}
	.expenses_value {
		width: 25%;
		border: 1px solid #ff5049;
	}

	@media (min-width: 768px){
		.income_value,
		.expenses_value{
			width: 20%;
		}
	}

	@media (max-width: 420px) {
		input {
			padding: 10px;
		}
		.income_text,
		.expenses_text {
			width: 55%;
		}
	}

	@media (max-width: 280px) {
		.income_text,
		.expenses_text {
			width: 53%;
		}
	}
`;
