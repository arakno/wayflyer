import React, { MouseEventHandler } from 'react';
import styled from 'styled-components'
import spinner from './img/spinner.svg'


interface StyledButtonProps {
    className?: string;
    labelText?: string;
    buttonText?: string;
    isWorking?: boolean;
    isError?: boolean;
    onClick?: MouseEventHandler;
}

const StyledButton = styled.button<StyledButtonProps>`
margin: .5em;
position: relative;

width: 133px;
height: 40px;
justify-content: center;
align-items: center;
box-sizing: border-box;
text-decoration: none;
${props => {
    if (props.isWorking) { 
        return `
        color: #FF7900;
        background-color:  #F5F5F5;
        border: 2px solid #FF7900;
        `
    } else if (props.isError) {
        return `
        color: #FF0000;
        background-color: #fff;
        border: 2px solid #FF0000;
        `
    } else {
        return `
        color: #000;
        background-color: #fff;
        border: 2px solid #000;
        `
    }
}
}
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