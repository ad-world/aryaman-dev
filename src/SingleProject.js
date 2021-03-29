import React from 'react'
import { Card } from 'react-bootstrap';
import Icons from './Icons'

export default function Project(props){
    return (
        <Card className="my-auto h-100">
            <Card.Body>
                <Card.Title>{ props.title }</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{ props.tech }</Card.Subtitle>
                <br></br>
                <Card.Text>{ props.Text }</Card.Text>
                <Card.Link target='_blank' href={ props.link } style={{position:'absolute', bottom:10}}><Icons/> </Card.Link>
            </Card.Body>
        </Card>
    )
}