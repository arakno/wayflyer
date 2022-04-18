import React from 'react'
import styled, { StyledComponent } from 'styled-components'



type Props = {
    text: string,
    className: string,
    onClick: () => void
}

const StyledButton = styled.button`
border-radius: .5em;
padding: .5em .8em;
font-size: 1em;
text-decoration: none;
margin: .5em;
color: #fff;
background-color: #55acee;
box-shadow: 0px 5px 0px 0px #3C93D5;

background-color: #55acee;
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


const Button  = ({text, ...props}: Props)=>{
    return (
        <>
            <StyledButton {...props} type="button">{text}</StyledButton>
        </>
    )
}

export default Button 