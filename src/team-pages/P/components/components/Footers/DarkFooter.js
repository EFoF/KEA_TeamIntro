/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>Jeongyeon</li>
            <li>
              <a href="https://github.com/jyeon172" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a
                href="http://blog.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Created By Jay - Gachon University /
          Computer Engineering .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
