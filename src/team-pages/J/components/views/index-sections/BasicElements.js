import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function BasicElements() {
  return (
    <>
      <div className="section section-basic" id="basic-elements">
        <div className="section section-tabs">
          <Container>
            <p id="info" className="text-warning">
              <br></br>
              <h3 className="title">지현종의 탄생</h3>
            </p>
            <p className="category">1999.08.09</p>
            <Row>
              <Col md="10">
                <Button
                  className="btn-round"
                  color="primary"
                  outline
                  type="button"
                >
                  #길병원에서_탄생
                </Button>
                <Button
                  className="btn-round"
                  color="primary"
                  outline
                  type="button"
                >
                  #가천대_올_운명
                </Button>
                <Button
                  className="btn-round"
                  color="primary"
                  outline
                  type="button"
                >
                  #살아남는_자가_강한_자
                </Button>
                <Button
                  className="btn-round"
                  color="primary"
                  outline
                  type="button"
                >
                  #역변
                </Button>
              </Col>
            </Row>

            <img
              alt="..."
              className="rounded-circle"
              src={require("../../../styles/img/jay-child.jpeg")}
            ></img>
            <p>
              <h6>지현종 군 (? 세)</h6>
            </p>
            <p className="category">
              그는 훗날 가천대학교 컴퓨터공학과에 입학하게 됩니다...
            </p>
          </Container>
        </div>
      </div>
    </>
  );
}

export default BasicElements;
