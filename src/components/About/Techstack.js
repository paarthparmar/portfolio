import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiCss3, SiHtml5, SiNextdotjs, SiWordpress } from "react-icons/si";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react-native" />
        <div className="tech-icons-text">React Native</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 fontSize={"24px"} />
        <div className="tech-icons-text">HTML5</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 fontSize={"24px"} />
        <div className="tech-icons-text">CSS3</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redux} alt="redux" />
        <div className="tech-icons-text">Redux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" />
        <div className="tech-icons-text">Mongo DB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress fontSize={"24px"} />
        <div className="tech-icons-text">WordPress</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"24px"} />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={MUI} alt="mui" />
        <div className="tech-icons-text">Material UI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
    </Row>
  );
}

export default Techstack;
