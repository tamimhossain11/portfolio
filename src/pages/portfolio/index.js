import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Project Experience | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Project Experience </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            if (data.isComingSoon) {
              return (
                <div key={i} className="po_item coming-soon-item">
                  <div className="coming-soon-content">
                    <div className="coming-soon-icon">🚀</div>
                    <h4>{data.projectName}</h4>
                    <p>{data.description}</p>
                  </div>
                </div>
              );
            }

            return (
              <div key={i} className="po_item">
                <img src={data.img} alt={data.projectName} />
                {data.badge && <span className="project-badge">{data.badge}</span>}
                {data.year && <span className="project-year">{data.year}</span>}
                <div className="content">
                  <h4>{data.projectName}</h4>
                  <p>{data.description}</p>
                  {data.videoUrl && (
                    <a 
                      href={data.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="view-link"
                    >
                      🎥 Watch Demo
                    </a>
                  )}
                  {data.link && data.link !== "#" && (
                    <a href={data.link} target="_blank" rel="noopener noreferrer" className="view-link">
                      View Project
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
