import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import TypeWriterEffect from "react-typewriter-effect";
import { ReactComponent as Down } from './svg/iconfinder_icon-ios7-arrow-down_211687.svg'

export default function Header() {
    return (
        <Container id="header" style={{ height: "100vh" }}>
            <Row className="row justify-content-center align-items-center text-center">
                <div className="col-12 d-flex align-items-center align-middle"
                    style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                    <Col >
                        <h1 className="text-black">
                            <TypeWriterEffect
                                text="Aryaman Dhingra"
                                hideCursor={true}
                                hideCursorAfterText={true}
                                textStyle={{ textAlign: 'center' }}
                            />
                        </h1>
                        <p className="text-black">
                            <TypeWriterEffect
                                text="Full-stack Web Developer/Data Scientist"
                                hideCursorAfterText={true}
                                startDelay={2000}
                                textStyle={{ textAlign: 'center', fontSize: '15px' }}
                            />
                        </p>
                    </Col>
                </div>
            </Row>
            <div className="text-center">
                <a href="#about">
                    <Down className="text-center" style={{ height: 20, width: 20, position: 'absolute', bottom: 20 }} />
                </a>
            </div>

        </Container>
    )
}