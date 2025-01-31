import React from "react";
import { ListGroup } from "react-bootstrap";
import { HomeIcon, SearchIcon } from "../../../../Assets/Icons/icons";
import styles from "./NavHeader.module.scss";
import clsx from "clsx";

interface NavHeaderProps {

}

const NavHeader: React.FC<NavHeaderProps> = () => {

    return (
        // <>
        //     <ListGroup className={clsx(styles.container)} >
        //         <ListGroup.Item className={clsx(styles.item)}>
        //             <HomeIcon width="1.6rem" height="1.6rem" className={clsx(styles.icon)} />
        //             <span>Home</span>
        //         </ListGroup.Item>
        //         <ListGroup.Item className={clsx(styles.item)}>
        //             <SearchIcon width="1.6rem" height="1.6rem" className={clsx(styles.icon)} />
        //             <span>Search</span>
        //         </ListGroup.Item>
        //     </ListGroup>
        // </>

        <>
            
        </>
    );
}

export default NavHeader;