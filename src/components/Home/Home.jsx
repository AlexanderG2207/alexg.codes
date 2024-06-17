import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ParticlesBg from 'particles-bg';
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import avatar from '../../Assets/avatar.svg';

function Home() {
    return (
        <Container fluid className="home-section">
            <ParticlesBg type="lines" bg={true} />
            <Container className="home-content">
                <Col>
                    <Row>
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                            Welcome!{' '}
                            <span className="wave" role="img" aria-labelledby="wave">
                                👋🏻
                            </span>
                        </h1>
                    </Row>
                    <Row className="home-header">
                        <h1 className="heading-name">
                            I am <strong className="main-name">Alexander Görtzen</strong> (aka AG)
                        </h1>
                        <div style={{ textAlign: 'center' }}>
                            <Typewriter
                                options={{
                                    strings: [
                                        "Aspiring Software Engineer",
                                        "Student",
                                        "Developer",
                                        "Open Source Contributor",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 20,
                                }}
                            />
                        </div>
                    </Row>
                    <Row className="myAvatar">
                        <Tilt>
                            <img src={avatar} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Row>
                </Col>
            </Container>
        </Container>
    );
}

export default Home;
