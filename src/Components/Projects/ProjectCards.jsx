import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ color: "#ff8800", fontWeight: "bold" }}>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Button
          variant="light"
          href={props.ghLink}
          target="_blank"
        >
          <BsGithub /> &nbsp;
          GitHub
        </Button>

        {props.demoLink && (
          <Button
            variant="dark"
            href={props.demoLink}
            target="_blank"
            style={{ backgroundColor: "#ff8800", color: "white", marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            Try it out!
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
