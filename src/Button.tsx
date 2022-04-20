import React from 'react'
import styled from 'styled-components'


type StyledButtonProps = {
    background: string,
    color: string,
}

const StyledButton = styled.button<StyledButtonProps>`
border-radius: .5em;
padding: .5em .8em;
font-size: 1em;
text-decoration: none;
margin: .5em;
color: ${({ color })=> color };
background-color: #55acee;
box-shadow: 0px 5px 0px 0px #3C93D5;

background-color: #55acee;
background-color: ${({ background }) => background };
box-shadow: 0px 5px 0px 0px #3C93D5;

&:active {
    transform: translate3d(0px, 5px);
    -webkit-transform: translate3d(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
}
&:hover {
    background-color: #6FC6FF;
    cursor: pointer;
}
`

type ButtonProps = {
    text: string,
    className: string,
    onClick: () => void
}

const Button:React.FC <ButtonProps> = ({className, text}) => {

// const Button = ({text, ...props}: ButtonProps) => {
    return (
        <>
            <StyledButton {...props} background="red" type="button">{text}</StyledButton>
        </>
    )
}

export default Button 