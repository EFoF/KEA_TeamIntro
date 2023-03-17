import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef(
  ({gradient, Name, message}, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(135deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <Container className="text-center">
          <h1 ref={ref} className="display-3">
            <b>안녕하세요 저희는 독수리 오남매입니다!</b>
          </h1>
          <Typist>
            <div className="lead typist">
              <h1>{message}</h1>
            </div>
          </Typist>
          <div className="p-5"/>
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about us
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
