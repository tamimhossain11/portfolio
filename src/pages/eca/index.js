import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  meta,
  extraCurricularActivities,
} from "../../content_option";

export const ECA = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Extra Curricular Activities | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4 about-title">Extra Curricular Activities</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <div className="eca-timeline">
              {extraCurricularActivities.map((eca, i) => (
                <div key={i} className="eca-item">
                  <div className="eca-header">
                    <div className="eca-title-section">
                      <h4 className="eca-title">{eca.title}</h4>
                      <span className="eca-role">{eca.role}</span>
                    </div>
                    <div className="eca-meta">
                      <div className="eca-organization">{eca.organization}</div>
                      <div className="eca-duration">{eca.duration}</div>
                    </div>
                  </div>
                  <div className="eca-content">
                    <p className="eca-description">{eca.description}</p>
                    <div className="eca-skills">
                      <strong>Skills/Technologies:</strong>
                      <div className="skills-tags">
                        {eca.skills.map((skill, idx) => (
                          <span key={idx} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

