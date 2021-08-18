import React, { MouseEventHandler } from 'react';
import { FC } from 'react';
import styled from 'styled-components';

interface BackdropProps {
	close?: MouseEventHandler<HTMLDivElement>;
}

const BackdropWrapper = styled.div`
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	/* display: flex; */
	/* z-index: 500; */
	position: fixed;
	/* align-items: center;
	justify-content: center; */
	background-color: rgba(0, 0, 0, 0.5);
	-webkit-tap-highlight-color: transparent;
`;

export const Backdrop: FC<BackdropProps> = ({ close }) => {
	return <BackdropWrapper onClick={close}></BackdropWrapper>;
};
