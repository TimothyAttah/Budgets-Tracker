import styled from 'styled-components';

export const FormContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 20px 0;
	.btn_red {
		background-color: red;
		color: var(--clr-light);
		padding: 11px;
		:hover {
			background-color: red;
			color: var(--clr-light);
			opacity: 0.9;
		}
	}
	.btn_green {
		background-color: green;
		color: var(--clr-light);
		padding: 11px;
		:hover {
			background-color: green;
			color: var(--clr-light);
			opacity: 0.9;
		}
	}
	.red {
		color: red;
	}
	.green {
		color: green;
	}

	@media (max-width: 900px) {
		flex-direction: column;
	}
	@media (max-width: 600px) {
		.btn_green,
		.btn_red {
			width: 80%;
			margin-top: 20px;
		}
		.btn_green-2,
		.btn_red-2 {
			width: 30%;
			margin-top: 15px;
		}
	}
`;
export const FormContainerLeft = styled.div`
	width: 25%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	/* border: 2px solid red; */
	@media (max-width: 900px) {
		width: 50%;
		margin: 20px 0;
	}
	@media (max-width: 600px) {
		flex-direction: column;
	}
	@media (max-width: 320px) {
		width: 70%;
	}
`;
export const FormContainerRight = styled.form`
	width: 70%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	label {
		font-weight: 600;
	}
	input {
		padding: 15px;
		border-radius: 5px;
	}
	.income_text {
		width: 50%;
		border: 2px solid green;
	}
	.income_value {
		width: 25%;
		border: 2px solid green;
	}
	.expenses_text {
		width: 50%;
		border: 2px solid red;
	}
	.expenses_value {
		width: 25%;
		border: 2px solid red;
	}
	@media (max-width: 900px) {
		width: 100%;
	}
	@media (max-width: 600px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		.expenses_text,
		.expenses_value,
		.income_text,
		.income_value {
			width: 80%;
		}
		label {
			font-size: 1.5rem;
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
		}
		input {
			margin-bottom: 10px;
			font-size: 1.2rem;
		}
	}
`;
