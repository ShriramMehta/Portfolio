import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import amazon from "../../Assets/Projects/amazon.png";
import ayurClinic from "../../Assets/Projects/ayurClinic.png";
import memgen from "../../Assets/Projects/memgen.png";
import wanderers from "../../Assets/Projects/Wanderers.png";
import task from "../../Assets/Projects/task.png";
import tenzies from "../../Assets/Projects/tenzies.png";
import whatsapp from "../../Assets/Projects/whatsapp.png";
import learn from "../../Assets/Projects/learn.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wanderers}
              isBlog={false}
              title="Wanderers"
              description="Wanderers is a social media application developed in MERN stack for travel lovers.
              Key Features: Recommendation, React Redux, Pagination, Google Authentication, Likes and Comments"
              ghLink="https://github.com/ShriramMehta/ShriSocialMedia"
              demoLink="https://shri-wanderers.netlify.app/posts"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Amazon"
              description="Developed a clone of e-commerce website Amazon. Added Payment Gateaway and Firebase Authentication. Used Material UI for making the application responsive"
              ghLink="https://github.com/ShriramMehta/amazon-frontend"
              demoLink="https://amazon-clone-shri.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ayurClinic}
              isBlog={false}
              title="AyurClinic"
              description="A Single page web app with dashboard where people can pick the date and time and fix an appointment. A doctor can review his appointments and prescribe medicine to a Patient from his dashboard.
              Features :
              Online appointment making,
              Patients Database,
              Review appointments,
              Prescribe medicine for each patient"
              ghLink="https://github.com/ShriramMehta/ayurClinic"
              demoLink="https://ayur-clinic.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tenzies}
              isBlog={false}
              title="Tenzies Game"
              description="Super cool number rolling Tenzies Game built with React.js. It allows you to roll the button and select the number of your choice to win the Game!"
              ghLink="https://github.com/ShriramMehta/Tenzies"
              demoLink="https://tenzies-game-shri.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Task Tracker"
              description="Built a task tracker with React that allows to add, update, and delete tasks."
              ghLink="https://github.com/ShriramMehta/task-tracker"
              demoLink="https://task-tracker-shri.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whatsapp}
              isBlog={false}
              title="Whatsapp Clone"
              description="WhatsApp Clone provides an in-depth view of implementation on how to create a full-stack and hybrid web application from scratch using ReactJs, NodeJs, ExpressJs, MongoDB, Socket.io, Heroku & Firebase Deployment."
              ghLink="https://github.com/ShriramMehta/whatsapp-mern"
              demoLink="https://whatsapp-mern-shri.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memgen}
              isBlog={false}
              title="Meme Genartor"
              description="A simple single page application built using react basics that uses API integraion to fetch memes and display"
              ghLink="https://github.com/ShriramMehta/meme-generator"
              demoLink="https://shri-meme-generator.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learn}
              isBlog={false}
              title="LEARN"
              description="A responsive website developed in HTML, CSS and Javascript. Focused on CSS for creating the website responsive. Created smooth scroll effect."
              ghLink="https://github.com/ShriramMehta/Learn"
              demoLink="https://shri-learn.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
