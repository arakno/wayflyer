import React from 'react'
import styled from 'styled-components'

interface StyledTooltipProps {
    className?: string;
    text?: string;
    isWorking?: boolean;
    isError?:boolean;
}

const StyledTooltip = styled.span<StyledTooltipProps>`
display: none;
position: relative;
justify-content: center;
align-items: center;
width: 133px;
height: 30px;
border: 2px solid ${props => props.isWorking ? "#FF7900" : "#000" };
box-sizing: border-box;
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 1.4;
text-decoration: none;
color: #fff;

${props => {
    if (props.isWorking) { 
        return `
        background-color: #FF7900;
        border: 2px solid #FF7900;
        &:after {
            border-color: #FF7900 transparent;
        }
        `
    } else if (props.isError) {
        return `
        background-color: #FF0000;
        border: 2px solid #FF0000;
        &:after {
            border-color: #FF0000 transparent;
        }
        `
    } else {
        return `
        background-color: #000;
        border: 2px solid #000;
        &:after {
            border-color: #000 transparent;
        }
        `
    }
}
}

&:after {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    z-index: 1;
    border-style: solid;
    border-width: 0 10px 12px;
    top: -12px;
    left: 50%;
    margin-left: -12px;
}
`

const Tooltip:React.FC<StyledTooltipProps> = (props: StyledTooltipProps) => {
    return (
       <StyledTooltip {...props}>{props.text}</StyledTooltip>
    )
}

export default Tooltip