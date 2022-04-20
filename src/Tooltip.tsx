import React from 'react'

type TooltipProps = {
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