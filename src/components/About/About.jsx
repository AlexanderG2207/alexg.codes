import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImPlus } from "react-icons/im";
import GitHubCalendar from "react-github-calendar";
import laptopImg from "../../Assets/about.svg";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
    const colorsForGitHubCalendar = {
        dark: ['#383838', '#663600', '#995200', '#cc6d00', '#ff8800'],
    };

    return (
        <Container fluid className="about-section">
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 className="about-heading">
                            <strong className="orange">About</strong> Me
                        </h1>
                        <blockquote className="blockquote mb-0">
                            <p style={{ textAlign: "justify" }}>
                                I am from <span className="orange">Cape Town, South Africa 🇿🇦</span>.
                                <br />
                                I am living in <span className="orange">Munich, Germany 🇩🇪</span>.
                                <br />
                                I have completed the bachelor's degree in Information Systems and I am currently pursuing the masters degree in Information Systems at the <span className="orange">Technical University of Munich</span>.
                                <br />
                                <br />
                                Apart from coding, some other activities that I love to do:
                            </p>
                            <ul>
                                <li className="about-activity">
                                    <ImPlus color="#ff8800" /> Working out
                                </li>
                                <li className="about-activity">
                                    <ImPlus color="#ff8800" /> Football
                                </li>
                                <li className="about-activity">
                                    <ImPlus color="#ff8800" /> Chess
                                </li>
                                <li className="about-activity">
                                    <ImPlus color="#ff8800" /> Traveling
                                </li>
                                <li className="about-activity">
                                    <ImPlus color="#ff8800" /> Cooking
                                </li>
                            </ul>
                        </blockquote>
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "40px", paddingBottom: "0px" }}
                    >
                        <img src={laptopImg} alt="about" className="img-fluid" />
                    </Col>
                </Row>

                <h1 className="about-heading">
                    My <strong className="orange">Skills</strong>
                </h1>

                <Techstack />

                <h1 className="about-heading">
                    My <strong className="orange">Tools</strong>
                </h1>

                <Toolstack />

                <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
                    <h1 className="about-heading">
                        <strong className="orange">Code</strong> Contributions
                    </h1>
                    <GitHubCalendar
                        username="alexanderg2207"
                        blockSize={16}
                        blockMargin={5}
                        colorScheme="dark"
                        theme={colorsForGitHubCalendar}
                        fontSize={16}
                    />
                </Row>
            </Container>
        </Container>
    );
};

export default About;
