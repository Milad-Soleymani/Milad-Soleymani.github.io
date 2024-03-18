import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/Logo.png";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} className="footerImg" alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target="_blank" href="https://www.linkedin.com/in/miladcoder/"><img src={navIcon1} alt="Icon" /></a>
              <a target="_blank" href="https://www.instagram.com/miladcoder/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024	&#169;   All Rights Reserved </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}