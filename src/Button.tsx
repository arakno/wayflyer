import React, { MouseEventHandler } from 'react';
import styled from 'styled-components'
import spinner from './img/spinner.svg'


interface StyledButtonProps {
    className?: string;
    color?: string;
    labelText?: string;
    buttonText?: string;
    isWorking?: boolean;
    onClick?: MouseEventHandler;
}

const StyledButton = styled.button<StyledButtonProps>`
margin: .5em;
position: relative;

width: 133px;
height: 40px;
justify-content: center;
align-items: center;
border: 2px solid ${props => props.isWorking ? "#FF7900" : "#000" };
box-sizing: border-box;
text-decoration: none;
color: ${props => props.isWorking ? "#FF7900" : "#000"};
background-color: ${props => props.isWorking ? "#F5F5F5" : "#fff" };
font-family: 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 1.4;

&:hover {
    transform: translate3d(0px, 5px);
    -webkit-transform: translate3d(0px, 5px);
}

&:disabled {
    color: rgba(0, 0, 0, 0.7);
    background: #F5F5F5;
}

.error {
    background-color: #ffff;
    border: 2px solid #FF0000;
    color: FF0000;
}


.spinner {
    position: absolute;
    right: 6px;
    top: 6px;
}
`

const StyledLabel = styled.label`
display: flex;
align-items: center;

&::after {
    content: '🚀'
}
`

const Button:React.FC<StyledButtonProps> = (props: StyledButtonProps) => {
    return (
        <>
            <StyledLabel>{props.labelText}
                <StyledButton {...props}>
                    {props.buttonText}
                    {props.isWorking && <img className="spinner" alt="Launching..." src={spinner} />}
                </StyledButton>
            </StyledLabel>
        </>
    )
}

export default Button 