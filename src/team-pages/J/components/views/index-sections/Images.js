import React from "react";

// react plugin used to create switch buttons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faMeta } from "@fortawesome/free-brands-svg-icons";
import { faB } from "@fortawesome/free-solid-svg-icons";

// reactstrap components
import { Container, NavLink } from "reactstrap";

// core components

function Images() {
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <div id="sns" className="space-70"></div>
          <div id="inputs">
            <p className="text-warning">
              <h3 className="titleJ">SNS</h3>
            </p>

            <p
              className="category"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div>
                <NavLink
                  href="https://www.instagram.com/jong_aaaaaaaaa/"
                  style={{ marginRight: 190 }}
                  className="text-primary"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                  &nbsp;&nbsp;Instagram
                </NavLink>
              </div>
              <div>
                <NavLink
                  href="https://short.bondee.cc/4n4K5IfGP48"
                  style={{ marginRight: 220 }}
                  className="text-primary"
                >
                  <FontAwesomeIcon icon={faB} />
                  &nbsp;&nbsp;Bondee
                </NavLink>
              </div>
              <div>
                <NavLink
                  href="https://www.facebook.com/profile.php?id=100006458500191"
                  className="text-primary"
                >
                  <FontAwesomeIcon icon={faMeta} />
                  &nbsp;&nbsp;Meta
                </NavLink>
              </div>
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: 50 }}>
              <img
                width={"300"}
                height={"500"}
                alt="..."
                src={require("../../../styles/img/jay-insta.jpeg")}
              ></img>
            </div>
            <div style={{ marginRight: 50 }}>
              <img
                width={"300"}
                height={"500"}
                alt="..."
                src={require("../../../styles/img/jay-bondee.jpeg")}
              ></img>
            </div>
            <div>
              <img
                width={"300"}
                height={"500"}
                alt="..."
                src={require("../../../styles/img/jay-meta.jpeg")}
              ></img>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Images;
