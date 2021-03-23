import React from 'react'
import Project from './SingleProject'
import { Container, Row, Col } from 'react-bootstrap';
export default function Projects() {
    return (
        <Container fluid id="projects" className="align-middle d-inline-block align-items-center justify-content-center bg-light my-5 py-5 h-100" style={{"min-height":"100%"}}>
            <Container>
                <h1 className="text-center align-middle">
                    Projects
                </h1>
                <Row className="">
                    <Col className="col-sm-3 mt-3">
                        <Project title="Premier League Predictor" tech="Python, NumPy, pandas, scikit-learn, TensorFlow, XGBoost" />
                    </Col>
                    <Col className="col-sm-3 mt-3">
                        <Project title="FINTRAC" tech="HTML, CSS, JavaScript, Bootstrap, Chart.js, jQuery, PHP, MySQL" />
                    </Col>
                    <Col className="col-sm-3 mt-3">
                        <Project title="Home of the Leopards" tech="HTML, CSS, Javascript, jQuery" />
                    </Col>
                    <Col className="col-sm-3 mt-3">
                        <Project title="aryaman.dev" tech="ReactJS, Firebase" />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}