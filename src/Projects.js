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
                    <Col className="col-lg-3 col-12 mt-3">
                        <Project title="Premier League Predictor" tech="Python, NumPy, pandas, scikit-learn, TensorFlow, XGBoost" 
                        Text="A machine learning/deep learning model that uses over
                         20 seasons of premier league data to try and predict the outcome of futurue games.
                         The project currently uses three models - regressions, gradient boosting, and neural networks."/>
                    </Col>
                    <Col className="col-lg-3 col-12 mt-3">
                        <Project title="FINTRAC" tech="HTML, CSS, JavaScript, Bootstrap, Chart.js, jQuery, PHP, MySQL" 
                        Text="A financial tracker web application that allows families to allocate budgets to different members,
                        add/edit/delete expenses, create new categories for expenses to fall under, 
                        and displays statistics for the current month such as highest spender, category breakdown, priority breakdown
                        and more."/>
                    </Col>
                    <Col className="col-lg-3 col-12 mt-3">
                        <Project title="Home of the Leopards" tech="HTML, CSS, Javascript, jQuery" 
                        Text="An online interactive schedule for the students of Dubai American Academy. Allows students to view the block 
                        schedule for the day, view the time until the current class ends, and view other things like a countdown to winter, spring
                        , and summer breaks, and a countdown to graduation."/>
                    </Col>
                    <Col className="col-lg-3 col-12 mt-3">
                        <Project title="aryaman.dev" tech="ReactJS, Firebase" 
                        Text="Personal developer portfolio. Using it to showcase my projects, skills, and experiences, but mainly to learn
                        technologies like React and Firebase."/>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}