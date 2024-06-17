import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlinePhone } from "react-icons/ai";
import { Button } from 'react-scroll';
import logo from "../../Assets/logo.png";

function Header() {
    return (
        <Navbar
            fixed="top"
            expand="md"
            className="header"
        >
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="Logo"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    /> &nbsp;
                    Alexander Görtzen
                </Navbar.Brand>
                <Nav className="ms-auto" defaultActiveKey="home">
                    <Nav.Item>
                        <Button
                            to="home"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={200}
                            className="nav-link"
                        >
                            <AiOutlineHome style={{ marginBottom: "3px", marginRight: "5px", color: "#ff8800" }} />
                            Home
                        </Button>
                    </Nav.Item>

                    <Nav.Item>
                        <Button
                            to="about"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={200}
                            className="nav-link"
                        >
                            <AiOutlineUser style={{ marginBottom: "3px", marginRight: "5px", color: "#ff8800" }} />
                            About
                        </Button>
                    </Nav.Item>

                    <Nav.Item>
                        <Button
                            to="projects"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={200}
                            className="nav-link"
                        >
                            <AiOutlineFundProjectionScreen style={{ marginBottom: "3px", marginRight: "5px", color: "#ff8800" }} />
                            Projects
                        </Button>
                    </Nav.Item>

                    <Nav.Item>
                        <Button
                            to="contact"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={200}
                            className="nav-link"
                        >
                            <AiOutlinePhone style={{ marginBottom: "3px", marginRight: "5px", color: "#ff8800" }} />
                            Contact
                        </Button>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
