import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Skill from './Skill'

export default function Skills() {
    return (
        <Container fluid style={{ height:"50vh" }}>
            <Container >
                <div className="align-items-center text-center">
                    <h1 className="mt-5 pt-5">Skills/Tech Stack</h1>
                </div>
                <Row className="justify-content-center text-center mt-5 align-middle d-flex">
                    <Col className="col-2">
                        <Skill title="HTML" content="I learnt the basics of HTML through
                        a Khan Academy course early in high school. I learnt more about it
                        as I used it in different projects" />
                    </Col>
                    <Col className="col-2">
                        <Skill title="CSS" content="I learnt the basics of CSS through a
                        Khan Academy course early in high school. I learn more about it 
                        as I started to use CSS libraries such as Boostrap"/>
                    </Col>
                    <Col className="col-2">
                        <Skill title="Boostrap" content="I learnt boostrap while I was creating
                        the financial tracker web application. I learnt it so that the website 
                        would have a responsive display for different viewports."/>
                    </Col>
                    <Col className="col-2">
                        <Skill title="Python" content="Python was my first real experience in the
                        programming world, after a friend of mine recommended checking it out. The first 
                        thing I built was a GPA calculator - est 9th grade."/>
                    </Col>
                </Row>
                <Row className="justify-content-around align-items-center text-center mt-5 align-middle d-flex">
                    <Col className="col-md-3"></Col>
                    <Col className="col-md-3"></Col>
                    <Col className="col-md-3"></Col>
                    <Col className="col-md-3"></Col>
                </Row>
            </Container>
        </Container>
    )
}