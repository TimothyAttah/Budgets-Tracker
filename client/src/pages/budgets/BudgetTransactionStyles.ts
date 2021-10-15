import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: auto;
	text-align: center;
	padding: 0 10px;

	p {
		font-size: 1.5rem;
		color: #fff;
		opacity: 0.9;
		margin-top: 30px;
	}

	h2 {
		color: #fff;
		opacity: 0.8;
		margin-top: 30px;
		margin-bottom: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 2.5rem;
		letter-spacing: 3px;
	}

	h4 {
		color: #322a2ab8;
		padding: 15px 20px;
		max-width: 500px;
		width: 100%;
		font-size: 1.3rem;
		display: flex;
		align-items: center;
		margin-bottom: 20px;
		position: relative;

		span {
			color: #fff;
			position: absolute;
			right: 80px;
			letter-spacing: 1px;
		}
		.percentage {
			right: 20px;
			background-color: #e2d7d759;
			font-size: 0.8rem;
			padding: 5px 10px;
		}
	}
	.income {
		background: #008074;
	}
	.expense {
		background-color: #ff5049;
	}

	@media (max-width: 1210px) {
		h2 {
			font-size: 2.8rem;
			margin: 20px 0;
			letter-spacing: 2px;
		}
	}

	@media (max-width: 540px) {
		h2 {
			font-size: 2.5rem;
		}
	}

	@media (max-width: 420px) {
		p {
			font-size: 1.2rem;
		}
		h2 {
			font-size: 2.3rem;
		}
		h4 {
			margin-bottom: 10px;
			padding: 10px 20px;
			span {
				right: 50px;
			}
			.percentage {
				right: 5px;
			}
		}
	}

	@media (max-width: 320px) {
		p {
			font-size: 1.2rem;
			margin-top: 15px;
		}
		h2 {
			font-size: 2rem;
			margin: 15px 0;
			letter-spacing: 2px;
		}
		h4 {
			margin-bottom: 10px;
			span {
				right: 50px;
			}
			.percentage {
				right: 5px;
			}
		}
	}
	
`;
