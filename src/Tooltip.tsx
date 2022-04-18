import React from 'react'

type Props = {
    className?: string;
    fontSize?: any;
    color?: string;
}

const Tooltip:React.FC <Props> = ({className, children}) => {
    return (
       <span className={className}>{children}</span>
    )
}

export default Tooltip