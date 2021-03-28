import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


export default function About() {
    return (
        <Container fluid id="about" className="bg-light my-5 pb-5">
            <Container className="bg-light">
                <div className="align-items-center text-center bg-light">
                    <h1 className="mt-5 pt-5">About Me</h1>
                </div>
                <Row className="justify-content-around align-items-center text-center mt-3 align-middle d-flex bg-light">
                    <Col className="col-md-3">I have project experience in Full-stack Web Development, Software Development, and
                    Machine Learning.</Col>
                    <Col className="col-md-3">I am currently in my 1B term studying Honors Computer Science @ University of
                    Waterloo.</Col>
                    <Col className="col-md-3">In my free time, I like watching soccer games, going to the gym, and drinking
                    karak chai.</Col>
                </Row>
            </Container>
        </Container>
    )
}