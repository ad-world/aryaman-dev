import React from 'react'
import { Card } from 'react-bootstrap';

export default function Project(props){
    return (
        <Card className="my-auto h-100">
            <Card.Body>
                <Card.Title>{ props.title }</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{ props.tech }</Card.Subtitle>
                <Card.Text>{ props.Text }</Card.Text>
                <Card.Link href={ props.link }>Link</Card.Link>
            </Card.Body>
        </Card>
    )
}