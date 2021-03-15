import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function Header() {
    return (
        <Container style={{height:"100vh"}}>
            <Row className="row justify-content-center align-items-center text-center">
                <div className="col-12 d-flex align-items-center align-middle"
                    style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                    <Col >
                        <h1 className="text-black">
                            Aryaman Dhingra
                </h1>
                        <p className="text-black">
                            Full-stack Web Developer/Data Scientist
                </p>
                    </Col>
                </div>
            </Row>
        </Container>
    )
}