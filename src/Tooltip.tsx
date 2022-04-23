import React from 'react'
import styled from 'styled-components'

interface StyledTooltipProps {
    text?: string;
    fontSize?: any;
    color?: string;
    background?: string;
    isWorking?: boolean;
}

const StyledTooltip = styled.span<StyledTooltipProps>`
display: flex;
justify-content: center;
align-items: center;
width: 133px;
height: 30px;
background-color: ${props => props.background || "#000"};
border: 2px solid #000;
box-sizing: border-box;

text-decoration: none;
color: ${props => props.color || "#fff"};
font-family: 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 1.4;
`

const Tooltip:React.FC<StyledTooltipProps> = (props: StyledTooltipProps) => {
    return (
       <StyledTooltip {...props}>{props.text}</StyledTooltip>
    )
}

export default Tooltip