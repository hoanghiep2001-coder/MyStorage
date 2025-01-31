import React from "react";
import clsx from "clsx";
import NavHeader from "./Components/NavHeader/NavHeader";
import Library from "./Components/Librabry/Library";
import styles from "./Navigation.module.scss"

interface NavigationProps {

}

const Navigation: React.FC<NavigationProps> = () => {

    return (
        <div className={clsx(styles.wrapper)}>
            <NavHeader />
            <Library />
        </div>
    );
}

export default Navigation;