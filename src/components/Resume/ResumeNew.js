import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import cvPdf from "../../Assets/Soumyajit_Behera.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const experience = [
  {
    title: "React Native Developer",
    company: "LogiFox Infotech",
    type: "Full-time",
    duration: "June 2022 - Present",
    location: "Surat, Gujarat, India",
    skill: "React Native",
  },
  {
    title: "Wordpress Developer",
    company: "risecta",
    type: "Full-time",
    duration: "August 2021 - May 2022",
    location: "Surat, Gujarat, India",
    skill: "WordPress",
  },
  {
    title: "Web Developer",
    company: "Brighten Solutions",
    type: "Internship",
    duration: "December 2020 - June 2021",
    location: "Surat, Gujarat, India",
    skill: "Core PHP",
  },
];

function ResumeNew() {
  // Using the currently available PDF in `src/Assets/`.
  // Replace this later with your own CV PDF when ready.
  const cvPdfUrl = cvPdf;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <h1 className="project-heading" style={{ paddingTop: "20px" }}>
            <strong className="purple">Resume</strong>
          </h1>

          <Row style={{ justifyContent: "center", position: "relative", paddingBottom: "25px" }}>
            <a
              className="btn btn-primary"
              href={cvPdfUrl}
              target="_blank"
              rel="noreferrer"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </a>
          </Row>

          <Row className="resume">
            <Col md={6} className="resume-left">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item">
                <h4 className="resume-title">Paarth Parmar</h4>
                <ul>
                  <li>
                    React Native Developer focused on building smooth, performant mobile apps and
                    polished user experiences.
                  </li>
                  <li>Location: Surat, Gujarat, India</li>
                </ul>
              </div>

              <h3 className="resume-title">Key Skills</h3>
              <div className="resume-item">
                <ul>
                  <li>
                    <span className="purple">React Native</span>,{" "}
                    <span className="purple">JavaScript</span>,{" "}
                    <span className="purple">TypeScript</span>, Redux
                  </li>
                  <li>Firebase, Git, Node.js, MongoDB</li>
                  <li>HTML, CSS, WordPress, Postman</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4 className="resume-title">BCA (Bachelor of Computer Applications)</h4>
                <ul>
                  <li>Completed</li>
                </ul>
              </div>
            </Col>

            <Col md={6} className="resume-right">
              <h3 className="resume-title">Experience</h3>
              {experience.map((job, idx) => (
                <div key={`${job.company}-${idx}`} className="resume-item">
                  <h4 className="resume-title">
                    {job.title} — <span className="purple">{job.company}</span>
                  </h4>
                  <ul>
                    <li>
                      {job.type} · {job.duration}
                    </li>
                    <li>{job.location}</li>
                    {job.skill && (
                      <li>
                        Primary: <span className="purple">{job.skill}</span>
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </Col>
          </Row>

          <Row className="resume" style={{ paddingTop: "10px" }}>
            <Col md={12} className="d-flex justify-content-center">
              <Document file={cvPdfUrl}>
                <Page pageNumber={1} scale={1.3} />
              </Document>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
