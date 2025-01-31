import React from "react";
import "./globalStyles.scss";
interface GlobalStylesProps {
    children: any
}


const GlobalStyles: React.FC<GlobalStylesProps> = ({children}) => {
    return (
        <>
            {children}
        </>
    );
}

export default GlobalStyles;