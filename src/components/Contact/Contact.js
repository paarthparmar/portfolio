import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineMail } from "react-icons/ai";

// Formspree: Sign up at https://formspree.io and add your form ID in .env as REACT_APP_FORMSPREE_ID
const FORMSPREE_ID = process.env.REACT_APP_FORMSPREE_ID || "YOUR_FORM_ID";
const isFormConfigured = FORMSPREE_ID && FORMSPREE_ID !== "YOUR_FORM_ID";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // "sending" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        const apiError = data.error || "";
        if (apiError.toLowerCase().includes("form not found") || res.status === 404) {
          setErrorMsg(
            "Formspree form ID is missing or invalid. Create a form at formspree.io, then add REACT_APP_FORMSPREE_ID=your_id in a .env file and restart the app."
          );
        } else {
          setErrorMsg(apiError || "Something went wrong. Please try again.");
        }
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ paddingTop: "20px" }}>
          Get In <strong className="purple">Touch</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", paddingBottom: "30px" }}>
          Have a project in mind or want to say hi? Drop a message below.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={8}>
            {!isFormConfigured && (
              <Alert variant="info" className="mb-4 text-start">
                <strong>Setup required:</strong> To receive messages, create a free form at{" "}
                <a href="https://formspree.io" target="_blank" rel="noreferrer" style={{ color: "var(--logo-golden)" }}>
                  formspree.io
                </a>
                , then in project root create a <code>.env</code> file with:
                <br />
                <code>REACT_APP_FORMSPREE_ID=your_form_id</code>
                <br />
                Restart the app after adding it.
              </Alert>
            )}
            <Form onSubmit={handleSubmit} className="contact-form text-start">
              <Form.Group className="mb-3">
                <Form.Label className="text-start">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="contact-input"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="text-start">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="contact-input"
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="text-start">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  className="contact-input contact-textarea"
                />
              </Form.Group>

              {status === "success" && (
                <Alert variant="success" className="mb-3">
                  Thanks! Your message has been sent. I'll get back to you soon.
                </Alert>
              )}
              {status === "error" && (
                <Alert variant="danger" className="mb-3">
                  {errorMsg}
                </Alert>
              )}

              <Button
                type="submit"
                variant="primary"
                className="contact-btn"
                disabled={status === "sending" || !isFormConfigured}
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <AiOutlineMail style={{ marginRight: "8px" }} />
                    Send Message
                  </>
                )}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
