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
            <li>Jay</li>
            <li>
              <a href="https://github.com/JongAAAAAAAAA" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://github.com/EFoF" target="_blank">
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
