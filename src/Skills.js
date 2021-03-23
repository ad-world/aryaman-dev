import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Skill from './Skill'

export default function Skills() {
    return (
        <Container id="skills" className="align-middle d-flex align-items-center justify-content-center my-5 pb-5">
            <Container >
                <div className="align-items-center text-center">
                    <h1 className="mt-5 pt-5">Skills/Tech Stack</h1>
                </div>
                <Row className="justify-content-center text-center mt-5 align-middle d-flex">
                    <Col className="col-md-2 mt-2">
                        <Skill title="HTML" content="I learnt the basics of HTML through
                        a Khan Academy course early in high school. I learnt more about it
                        as I used it in different projects" />
                    </Col>
                    <Col className="col-md-2 mt-2">
                        <Skill title="CSS" content="I learnt the basics of CSS through a
                        Khan Academy course early in high school. I learn more about it 
                        as I started to use CSS libraries such as Boostrap"/>
                    </Col>
                    <Col className="col-lg-2 mt-2">
                        <Skill title="Python" content="Python was my first real experience in the
                        programming world, after a friend of mine recommended checking it out. The first 
                        thing I built was a GPA calculator - est 9th grade."/>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center text-center mt-5 align-middle d-flex">
                    <Col className="col-lg-2 mt-2">
                        <Skill title="C" content="I'm currently learning C in a university course titled Elementary Algorithm
                    Design and Data Abstraction."/>
                    </Col>
                    <Col className="col-lg-2 mt-2">
                        <Skill title="JavaScript" content="I learnt JavaScript in a course by Team Treehouse in 2018. 
                        I have used it in every project since."/>
                    </Col>
                    <Col className="col-lg-2 mt-2">
                        <Skill title="Racket" content="I learnt Racket in a university course titled Intro the Functional Programming. The course 
                        is mainly focused on the different types of recursion."/>
                    </Col>
                    <Col className="col-lg-2 mt-2">
                        <Skill title="Boostrap" content="I learnt boostrap while I was creating
                        the financial tracker web application. I learnt it so that the website 
                        would have a responsive display for different viewports."/>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center text-center mt-5 align-middle d-flex">
                    <Col className="col-lg-2 mt-2">
                        <Skill title="SQL/MySQL" content="I learnt how to use SQL while creating the financial tracker on my resume. It was
                        used with the help of PHP and phpMyAdmin (with a MySQL server)."/>
                    </Col>
                    <Col className="col-lg-2 mt-2">
                        <Skill title="Java" content="I learnt the basics of Java in a high school computer science course. I built basics applications with it 
                        a calculator with a usable interface - done with NetBeans."/>
                    </Col>
                    <Col className="col-lg-2 mt-2">
                        <Skill title="jQuery" content="I learnt how to use jQuery while building the home of the leopards. I used it to simplify the use of 
                        query selectors on the DOM with the simple $ notation."/>
                    </Col>
                    <Col className="col-lg-2 mt-2">
                        <Skill title="NumPy" content="I leant how to use the numpy library through a machine learning course on educative. I then used it in the premier 
                        league predictor project to convert labels into numerical data."/>
                    </Col>
                    <Col className="col-lg-2 mt-2">
                        <Skill title="pandas" content="I learnt how to use the pandas library through a machine learning course on educative. I used it in the premier league predictor 
                        project to extract data from csv files and combine into one large DataFrame."/>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center text-center mt-5 align-middle d-flex">
                    <Col className="col-lg-2 mt-2">
                        <Skill title="scikit-learn" content="I learnt how to use this library in a machine learning course on educative. I mainly used it spit training and 
                        testing data in the premier league predictor."/>
                    </Col>
                    <Col className="col-lg-2 mt-2">
                        <Skill title="Git" content="I learnt how to use Git commands while building the premier league predictor. It is being used to keep track
                        of this website as well."/>
                    </Col>
                    <Col className="col-lg-2 mt-2">
                        <Skill title="TensorFlow" content="I learnt how to use TensorFlow in a machine learning course on educative. I used it for one of the deep learning models
                        in the premier league predictor project."/>
                    </Col>
                    <Col className="col-lg-2 mt-2">
                        <Skill title="Keras" content="I learnt how to use Keras in a machine learning course on educative"/>
                    </Col>
                    <Col className="col-lg-2 mt-2">
                        <Skill title="XGBoost" content="I learnt how to use XGBoost in a machine learning course on educative. I used it for the gradient boosting model in the 
                        premier league predictor project."/>
                    </Col>
                    <Col className="col-lg-2 mt-2">
                        <Skill title="React" content="I am learning react as I build this website (it is a react app). I'm going through documentation and watching videos to learn how to 
                        accomplish different things with react."/>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}