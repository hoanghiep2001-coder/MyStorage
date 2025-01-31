import React from "react";
import styles from "./LibraryHeader.module.scss";
import clsx from "clsx";
import { ListGroup } from "react-bootstrap";
import { LibraryIcon } from "../../../../../../Assets/Icons/icons";


interface LibraryHeaderProps {
    suggestItems: string[];
}

const LibraryHeader: React.FC<LibraryHeaderProps> = ({ suggestItems }) => {
    return (
        <>
            <ListGroup className={clsx(styles.container)}>
                <ListGroup.Item className={clsx(styles.item)}>
                    <LibraryIcon width="1.6rem" height="1.6rem" className={clsx()} />
                    <span>Your Library</span>
                </ListGroup.Item>
                <ListGroup.Item className={clsx(styles.item, styles.item_many)}>
                    {suggestItems.map((item, index) => {
                        return (
                            <span key={`${item}_${index}`}>{item}</span>
                        );
                    })}
                </ListGroup.Item>
            </ListGroup>
        </>
    );
}

export default LibraryHeader;