import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ReactComponent as Github } from './svg/github.svg'
import { ReactComponent as Linkedin } from './svg/linkedin.svg'
import { ReactComponent as Insta } from './svg/insta.svg'

export default function Socials() {
    return (
        <Container id="socials" className="align-middle d-flex align-items-center justify-content-center my-5 pb-5">
            <Container>
                <div className="align-items-center text-center">
                    <h1 className="mt-5 pt-5">Socials</h1>
                </div>
                <Row className="text-center mt-5">
                    <Col className='col col-4'>
                        <a href="https://github.com/ad-world" target="_blank" rel="noreferrer">
                            <Github style={{ height: 100, width: 100 }} />
                        </a>
                    </Col>
                    <Col className='col col-4'>
                        <a href="https://www.linkedin.com/in/ad-world/" target="_blank" rel="noreferrer">
                            <Linkedin style={{ height: 100, width: 100 }} />
                        </a>
                    </Col>
                    <Col className='col col-4'>
                        <a href="https://www.instagram.com/aryaman.d/" target="_blank" rel="noreferrer">
                            <Insta style={{ height: 100, width: 100 }} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}