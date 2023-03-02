import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        by{" "}
        <a
          rel="noopener"
          href="https://github.com/JustinCChen"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Justin Chen
          </span>
        </a>{" "}
        using <i className="fab fa-react" />
      </Container>
    </footer>
  );
};

export default Footer;
