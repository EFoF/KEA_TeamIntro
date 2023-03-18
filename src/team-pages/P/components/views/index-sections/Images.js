import React from "react";

// react plugin used to create switch buttons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faMeta } from "@fortawesome/free-brands-svg-icons";
import { faB } from "@fortawesome/free-solid-svg-icons";

// reactstrap components
import { Container, Row, Col, NavLink } from "reactstrap";

// core components

function Images() {
  return (
    <>
      <Container>
        <div id="inputs">
          <p className="text-warning">
            <h3 className="title">SNS</h3>
          </p>

          <p
            className="category"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div>
              <NavLink href="https://www.instagram.com/jjng0/">
                <FontAwesomeIcon icon={faInstagram} />
                &nbsp;&nbsp;Instagram
              </NavLink>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            {/* <div>
              <NavLink href="https://short.bondee.cc/4n4K5IfGP48">
                <FontAwesomeIcon icon={faB} />
                &nbsp;&nbsp;Bondee
              </NavLink>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <NavLink href="https://www.facebook.com/profile.php?id=100006458500191">
                <FontAwesomeIcon icon={faMeta} />
                &nbsp;&nbsp;Meta
              </NavLink>
            </div> */}
          </p>
        </div>

        <div className="section section-images">
          {/* <div className="section section-images" style={{ display: 'flex', flexDirection: 'row'}}> */}

          {/* <Row> */}
          {/* <Col md="12"> */}
          {/* Instagram */}
          {/* <div className="hero-images-container"> */}
          {/* <div> */}
          <img
            width={"500"}
            height={"700"}
            alt="..."
            src={require("../../../styles/img/instagram.jpg")}
          ></img>
          {/* </div> */}

          {/* <div className="hero-images-container-1">
                <img
                  width={"300"}
                  height={"500"}
                  alt="..."
                  src={require("../../assets/img/jay-bondee.jpeg")}
                ></img>
              </div>
              <div className="hero-images-container-2">
                <img
                  width={"300"}
                  height={"500"}
                  alt="..."
                  src={require("../../assets/img/jay-meta.jpeg")}
                ></img>
              </div> */}
          {/* </Col> */}
          {/* </Row> */}
        </div>
      </Container>
    </>
  );
}

export default Images;
