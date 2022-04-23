import React, { MouseEventHandler } from 'react';
import styled from 'styled-components'
import spinner from './img/spinner.svg'


interface StyledButtonProps {
    background?: string;
    color?: string;
    labelText?: string;
    buttonText?: string;
    isWorking?: boolean;
    onClick?: MouseEventHandler;
}

const StyledButton = styled.button<StyledButtonProps>`
margin: .5em;

width: 133px;
height: 40px;
justify-content: center;
align-items: center;
background-color: ${props => props.background || "#fff"};
border: 2px solid #000;
box-sizing: border-box;

text-decoration: none;
color: ${props => props.color || "#000"};
font-family: 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 1.4;

&:active {
    transform: translate3d(0px, 5px);
    -webkit-transform: translate3d(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
}
&:hover {
    background: #F5F5F5;
    border: 2px solid #FF7900;
}
&:disabled {
    color: rgba(0, 0, 0, 0.7);
    background: #F5F5F5;
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
                <StyledButton {...props}>{props.buttonText}
                    {props.isWorking && <img alt="working..." src={spinner} />}
                </StyledButton>
            </StyledLabel>
        </>
    )
}

export default Button 