import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a React Native Developer who loves turning ideas into
              smooth, performant mobile apps. Over time, I’ve worked with
              various tech stacks and found my passion in building
              cross-platform applications and polished user experiences.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, React Native, Redux, and Firebase{" "}
                </b>
              </i>
              — and I enjoy working on both iOS and Android with a single codebase.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Mobile Applications, Cross-Platform Apps,{" "}
                </b>
              </i>
              and exploring tools that improve app performance and UX.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> React Native </b> and tools like{" "}
              <i>
                <b className="purple">Expo</b> and{" "}
                <b className="purple">React Navigation</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
