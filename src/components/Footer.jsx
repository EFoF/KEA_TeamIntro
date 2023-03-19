import React from "react";
import Container from "react-bootstrap/Container";
import { mainBody } from "../editable-stuff/config";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#ff8c00" };

  return (
    <footer
      style={{
        background: `linear-gradient(135deg,${mainBody.gradientColors})`,
      }}
      className="mt-auto py-1 text-center "
    >
      <Container>
        {props.children}
        <br />
        <i className="fas fa-code" /> created <i className="fas fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/EFoF"
          aria-label="Our GitHub"
        >
          {" "}
          <span className="badge bg-dark">독수리 오남매</span>
        </a>{" "}
        members <i className="fab fa-react" />
        <p>
          <small className="text-muted">
            This page is a web page about our profile. We will update it
            periodically.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
