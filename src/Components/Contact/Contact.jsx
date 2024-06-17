import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

function Contact() {
    return (
        <Container fluid className="contact-section">
            < Row >
                <Col>
                    <h1 style={{ color: "white", fontSize: "2.5em" }}>
                        <strong>Let's Connect!</strong>
                    </h1>

                    <p>
                        <strong>Find me on the following platforms</strong>
                    </p>

                    <ul className="contact-social-links">
                        <li className="social-icons">
                            <a
                                href="https://github.com/alexanderg2207"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-social-icons"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/alexanderg%C3%B6rtzen/"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-social-icons"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/alexgortzen"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-social-icons"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row >
        </Container >
    );
}

export default Contact;