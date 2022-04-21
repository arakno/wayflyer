import React from 'react'
import { Interface } from 'readline'

interface TooltipProps {
    className?: string;
    fontSize?: any;
    color?: string;
}

const Tooltip:React.FC <TooltipProps> = ({className, children}) => {
    return (
       <span className={className}>{children}</span>
    )
}

export default Tooltip