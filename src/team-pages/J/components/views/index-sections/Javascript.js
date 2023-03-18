import React from "react";

// reactstrap components
import { Button, Container, Modal, ModalBody, Row, Col } from "reactstrap";

// core components

function Javascript() {
  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  return (
    <>
      <div id="projects"></div>
      <div className="section section-javascript" id="javascriptComponents">
        <Container>
          <p className="text-warning">
            <h3 className="title">Projects</h3>
            <br />
          </p>
          <Row id="modals">
            <Col md="6">
              <p className="category">
                <h5>Click Buttons!</h5>
              </p>
              <br />
              <Button
                color="primary"
                className="mr-1"
                onClick={() => setModal1(true)}
                style={{
                  marginBottom: "80px",
                  fontSize: 15,
                  marginTop: 150,
                }}
              >
                Project 1
              </Button>
              <Button
                color="primary"
                className="mr-1"
                onClick={() => setModal2(true)}
                style={{
                  marginBottom: "80px",
                  fontSize: 15,
                  marginTop: 150,
                  marginLeft: 100,
                }}
              >
                Project 2
              </Button>
              <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Family Guardian</h4>
                </div>
                <ModalBody>
                  <p>
                    <img
                      alt="Project 1"
                      src={require("../../../styles/img/app-main.png")}
                    ></img>
                  </p>
                </ModalBody>
                <div className="modal-footer">
                  <Button
                    color="default"
                    type="button"
                    href="https://github.com/JongAAAAAAAAA/Integrated_Project"
                  >
                    Github
                  </Button>
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>

              <Modal isOpen={modal2} toggle={() => setModal2(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal2(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Budget Management</h4>
                </div>
                <ModalBody>
                  <p>
                    <img
                      alt="Project 2"
                      src={require("../../../styles/img/web-main.jpg")}
                    ></img>
                  </p>
                </ModalBody>
                <div className="modal-footer">
                  <Button
                    color="default"
                    type="button"
                    href="https://github.com/JongAAAAAAAAA/Budget"
                  >
                    Github
                  </Button>
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal2(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>

              <div className="space-70"></div>
              <div className="space-70"></div>
              <div className="space-70"></div>
              <div className="space-70"></div>
              <div className="space-70"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Javascript;
