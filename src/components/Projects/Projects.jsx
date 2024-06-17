import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import apollonIOSModule from "../../Assets/Projects/apollon-ios-module.png";
import apollonIOS from "../../Assets/Projects/apollon-ios.png";
import budgety from "../../Assets/Projects/budgety.png";
import doubleDice from "../../Assets/Projects/double-dice.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="orange">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've been working on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apollonIOSModule}
              title="Apollon iOS Module"
              description="My bachelor thesis consisted of creating a Swift Package Manager (SPM) package called 'Apollon iOS Module', to allow other iOS applications to integrate Unified Modeling Language (UML) modeling capabilities. The thesis was written at the Technical University of Munich in conjunction with the Chair for Applied Software Engineering."
              ghLink="https://github.com/ls1intum/apollon-ios-module"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apollonIOS}
              title="Apollon iOS"
              description="During the duration of my bachelor thesis, we also created a standalone UML modeling application for iOS, which incorporates the 'Apollon iOS Module'. The 'Apollon iOS' app was created to enable users to freely and efficiently create UML models on the go with their iPhone or iPad. Users can drag and drop different UML elements and relationships and directly export them once they are complete."
              ghLink="https://github.com/ls1intum/apollon-ios"
              demoLink="https://apps.apple.com/de/app/apollon-uml-modeling-editor/id6474762031?l=en-GB"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budgety}
              title="Budgety"
              description="Budgety was created with JavaScript, CSS and HTML. It uses simple calculations and equations to calculate your personal monthly budget, which might be very difficult at times. Just add all of your expenses and your income, and Budgety will solve the rest!"
              ghLink="https://github.com/AlexanderG2207/Budgety"
              demoLink="https://algorithmicsdesign.com/builds/budgety/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doubleDice}
              title="Double Dice"
              description="The game involves two players who take turns in rounds. To start, enter a target score between 1 and 9999 in the 'Final Score' section. During each turn, a player rolls a die as many times as desired, accumulating points toward their 'Current' score. Rolling a 1, however, resets their 'Current' score and ends their turn. Players can choose to 'Keep Score' at any time, transferring their 'Current' score to their 'Global' score. The first player to reach the 'Final Score' wins the game."
              ghLink="https://github.com/AlexanderG2207/DoubleDice"
              demoLink="https://algorithmicsdesign.com/builds/doubledice/index.html"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
