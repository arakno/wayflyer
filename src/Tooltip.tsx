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
position: relative;
justify-content: center;
align-items: center;
width: 133px;
height: 30px;
background-color: ${props => props.background || "#000"};
border: 2px solid #000;
box-sizing: border-box;
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 1.4;
text-decoration: none;
color: ${props => props.color || "#fff"};

&:before,
&:after {
    content: "\0020";
    display:block;
    position:absolute;
    top:-20px;  /* Offset top the height of the pointer's border-width */
    left:20px;
    z-index:2;
    width: 0;
    height: 0;
    overflow:hidden;
    border: solid 20px transparent;
    border-top: 0;
    border-bottom-color:#FFF;
}
&:before {
    top:-30px; /* Offset of pointer border-width + bubble border-width */
    z-index:1;
    border-bottom-color:rgba(0,0,0,0.095);
}
`

const Tooltip:React.FC<StyledTooltipProps> = (props: StyledTooltipProps) => {
    return (
       <StyledTooltip {...props}>{props.text}</StyledTooltip>
    )
}

export default Tooltip