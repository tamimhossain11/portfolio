import React, { useState } from "react";
import "./style.css";
import "../about/style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import * as emailjs from "emailjs-com";
import { 
  introdata,
  meta,
  dataabout,
  worktimeline,
  workExperience,
  highlightedSkills,
  allSkills,
  extraCurricularActivities,
  dataportfolio,
  contactConfig,
   } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";

export const Home = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! ,Thankyou for your messege",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Faild to send!,${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <HelmetProvider>
      
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <a href="#portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Project Experiences
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </a>
                  <a href="#contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about">
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
                {(() => {
                  const groupedSkills = allSkills.reduce((acc, skill) => {
                    if (!acc[skill.category]) {
                      acc[skill.category] = [];
                    }
                    acc[skill.category].push(skill);
                    return acc;
                  }, {});
                  
                  return Object.keys(groupedSkills).map((category) => (
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
                  ));
                })()}
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
      </Container>
      </section>
      <section id="eca" className="eca">
      <Container className="About-header">
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
      </section>
      <section id="portfolio" className="portfolio">
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Project Experience {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Project Experience </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="mb-5">
          {dataportfolio.map((data, i) => {
            if (data.isComingSoon) {
              return (
                <Col lg="4" md="6" key={i} className="mb-4">
                  <div className="project-card coming-soon-card">
                    <div className="coming-soon-content">
                      <div className="coming-soon-icon">🚀</div>
                      <h4>{data.projectName}</h4>
                      <p>{data.description}</p>
                    </div>
                  </div>
                </Col>
              );
            }
            return (
              <Col lg="4" md="6" key={i} className="mb-4">
                <div className="project-card">
                  {data.badge && (
                    <span className="project-badge">{data.badge}</span>
                  )}
                  {data.year && (
                    <span className="project-year">{data.year}</span>
                  )}
                  <div className="project-media">
                    {data.videoUrl ? (
                      <div className="video-container">
                        <iframe
                          src={(() => {
                            let embedUrl = data.videoUrl;
                            if (embedUrl.includes('youtu.be/')) {
                              const videoId = embedUrl.split('youtu.be/')[1].split('?')[0];
                              embedUrl = `https://www.youtube.com/embed/${videoId}`;
                            } else if (embedUrl.includes('youtube.com/watch?v=')) {
                              const videoId = embedUrl.split('watch?v=')[1].split('&')[0];
                              embedUrl = `https://www.youtube.com/embed/${videoId}`;
                            } else if (!embedUrl.includes('youtube.com/embed/')) {
                              embedUrl = embedUrl.replace('youtube.com/', 'youtube.com/embed/').replace('watch?v=', 'embed/');
                            }
                            return embedUrl;
                          })()}
                          title={data.projectName}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="project-video"
                        ></iframe>
                      </div>
                    ) : (
                      <img src={data.img} alt={data.projectName} className="project-image" />
                    )}
                  </div>
                  <div className="project-content">
                    <h4 className="project-title">{data.projectName}</h4>
                    <p className="project-description">{data.description}</p>
                    {data.technologies && (
                      <div className="project-technologies">
                        {data.technologies.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                        {data.technologies.length > 3 && (
                          <span className="tech-tag">+{data.technologies.length - 3} more</span>
                        )}
                      </div>
                    )}
                    {data.link && data.link !== "#" && (
                      <a href={data.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Project →
                      </a>
                    )}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      </section>
      <section id="contact" className="contact">
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12" className="mb-4">
            <Alert
              variant={formData.variant}
              className={`contact-alert ${
                formData.show ? "d-block" : "d-none"
              }`}
              onClose={() => setFormdata({ show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5 mb-lg-0">
            <div className="contact-info-card">
              <h3 className="contact-section-title">Get in touch</h3>
              <p className="contact-description">{contactConfig.description}</p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-info">
                    <strong>Email</strong>
                    <a href={`mailto:${contactConfig.YOUR_EMAIL}`} className="contact-link">
                      {contactConfig.YOUR_EMAIL}
                    </a>
                  </div>
                </div>
                {contactConfig.hasOwnProperty("YOUR_FONE") && (
                  <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <div className="contact-info">
                      <strong>Phone</strong>
                      <a href={`tel:${contactConfig.YOUR_FONE}`} className="contact-link">
                        {contactConfig.YOUR_FONE}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col lg="7">
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact__form">
                <div className="form-row-custom">
                  <div className="form-group-custom">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      className="form-input"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name || ""}
                      type="text"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group-custom">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      className="form-input"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      type="email"
                      value={formData.email || ""}
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group-custom">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-textarea"
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button className="contact-submit-btn" type="submit" disabled={formData.loading}>
                  {formData.loading ? (
                    <>
                      <span className="btn-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="btn-arrow">→</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
      </section>
    </HelmetProvider>
  );
};
