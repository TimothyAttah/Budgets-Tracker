import React, { ReactNode } from 'react';
import { FC } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface ModalProps {
	children: ReactNode;
}

const ModalContainer = styled.div`
	background: var(--clr-light);
	z-index: 999;
	margin: 0 auto;
	border-radius: 10px;
	position: absolute;
	top: 100px;
	left: 50%;
	transform: translateX(-50%);
	max-width: 600px;
	width: 100%;
	box-sizing: border-box;
	padding: 10px 30px;
	@media (min-width: 700px) {
		top: 130px;
	}
	@media (max-width: 700px) {
		top: 150px;
	}
`;

export const Modal: FC<ModalProps> = ({ children }) => {
	return ReactDOM.createPortal(
		<>
			<ModalContainer>{children}</ModalContainer>
		</>,
		document.getElementById('modal') as HTMLElement
	);
};
