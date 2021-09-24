import styled from "styled-components";
import { Button, ButtonGroup } from '@material-ui/core';
import { FC } from "react";

export const ButtonContainer = styled(Button)`
	/* background-color: var(--clr-lightBlue); */
	a {
		background-color: var(--clr-light);
		color: var(--bg-black);
		width: 100%;
		padding: 4px 15px;
	}
`;
export const ButtonContainers = styled(ButtonGroup)`
	background-color: var(--clr-accent); 
	/* background-color: var(--clr-lightBlue); */
	button {
		color: var(--clr-light);
	}
`;


export const UserButton: FC = ({ children }) => {
  return <ButtonContainer variant='outlined'>{children}</ButtonContainer>;
};

export const UserButtons: FC = ({ children }) => {
  return (
    <ButtonContainers variant='contained'>
      {children}
    </ButtonContainers>
  )
};


