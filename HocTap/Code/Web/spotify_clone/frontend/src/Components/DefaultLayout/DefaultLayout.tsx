import React, {  } from "react";
// import { context } from "../../provider/Provider";
import { Col, Row } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import styles from "./DefaultLayout.module.scss";
import clsx from "clsx";
import MainContent from "../MainContent/MainContent";
import Header from "./Components/Header/Header";

interface DefaultLayoutProps {

}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({  }) => {

  // const spotify_context = useContext(context)
  // console.log(spotify_context.accessToken);
  
  return (
    <>
      <div className={clsx(styles.wrapper)}>
        <Header />
        <Row>
          <Col className={clsx(styles.col_lg_3)}>
            <Navigation />
          </Col>
          <Col>
            <MainContent />
          </Col>
          <Col className={clsx(styles.col_lg_3)} >
            SideBar
          </Col>
        </Row>
      </div>
      {/* {console.log(spotify_context.exampleField)} */}
    </>
  );
}

export default DefaultLayout;