import React from 'react'
import styled from 'styled-components'


type StyledButtonProps = {
    background: string,
    color: string,
    labelText: string,
    buttonText: string,
    onClick: () => void
}

const StyledButton = styled.button<StyledButtonProps>`
border-radius: .5em;
padding: .5em .8em;
font-size: 1em;
text-decoration: none;
margin: .5em;
color: ${props => props.color || "palevioletred"};
background-color: ${props => props.background || "#55acee"};
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

const Button:React.FC<StyledButtonProps> = (props: StyledButtonProps) => {

    return (
        <>
            <label>{props.labelText}
                <StyledButton {...props}>{props.buttonText}</StyledButton>
            </label>
        </>
    )
}

export default Button 