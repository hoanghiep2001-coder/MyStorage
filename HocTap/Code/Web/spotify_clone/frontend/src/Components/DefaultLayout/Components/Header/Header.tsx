import React, {  } from "react";
// import { context } from "../../provider/Provider";
import { Col, Row } from "react-bootstrap";
import styles from "./Header.module.scss";
import clsx from "clsx";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({  }) => {

  // const spotify_context = useContext(context)
  // console.log(spotify_context.accessToken);
  
  return (
    <>
      <div className={clsx(styles.wrapper)}>
        
        <Row>
          <Col className={clsx(styles.col_lg_3)}>
     
          </Col>
          <Col>
          
          </Col>
          <Col className={clsx(styles.col_lg_3)} >
            
          </Col>
        </Row>
      </div>
      {/* {console.log(spotify_context.exampleField)} */}
    </>
  );
}

export default Header;