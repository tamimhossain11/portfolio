import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  workExperience,
  highlightedSkills,
  allSkills,
  extraCurricularActivities,
  services,
} from "../../content_option";

export const About = () => {
  // Group skills by category
  const groupedSkills = allSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4 about-title">About Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <div className="about-card">
              <div className="about-content">
                <h3 className="color_sec py-4 section-subtitle">{dataabout.title}</h3>
                <p className="about-text">{dataabout.aboutme}</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 section-subtitle">Language Proficiency</h3>
            <div className="language-proficiency">
              {worktimeline.map((data, i) => {
                return (
                  <div key={i} className="language-item">
                    <div className="language-name">{data.jobtitle}</div>
                    <div className="language-level">{data.where}</div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <div className="skills-section">
              <h3 className="color_sec py-4 section-subtitle">Skills & Expertise</h3>
              <div className="skills-container">
                {Object.keys(groupedSkills).map((category) => (
                  <div key={category} className="skill-category">
                    <h4 className="category-title">{category}</h4>
                    <div className="skills-grid">
                      {groupedSkills[category].map((data, i) => {
                        return (
                          <div key={i} className="skill-item">
                            <div className="skill-header">
                              <span className="skill-name">{data.name}</span>
                              <span className="skill-percentage">{data.value}%</span>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                style={{
                                  width: `${data.value}%`,
                                }}
                              >
                                <div className="progress-value">{data.value}%</div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Work Experience</h3>
            <div className="experience-timeline">
              {workExperience.map((exp, i) => (
                <div key={i} className="experience-item">
                  <div className="experience-header">
                    <div className="experience-company">
                      <h4 className="company-name">{exp.company}</h4>
                      <span className="experience-type">{exp.type}</span>
                    </div>
                    <div className="experience-meta">
                      <h5 className="position-title">{exp.position}</h5>
                      <div className="experience-details">
                        <span className="experience-duration">{exp.duration}</span>
                        <span className="experience-location">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="experience-content">
                    <div className="experience-skills">
                      <strong>Technologies:</strong>
                      <div className="skills-tags">
                        {exp.skills.map((skill, idx) => (
                          <span key={idx} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                    <div className="experience-responsibilities">
                      <strong>Key Responsibilities:</strong>
                      <ul className="responsibilities-list">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4 section-subtitle">Extra Curricular Activities</h3>
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
