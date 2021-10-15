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
    font-size: 1.5rem;
	}
  @media (max-width: 500px){
    button{
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
  @media (max-width: 350px){
    button{
      font-size: 1rem;
      font-weight: bold;
      padding:5px 10px;
    }
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


