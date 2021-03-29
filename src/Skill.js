import { Popover, OverlayTrigger, Button} from 'react-bootstrap';
import React from 'react'

export default function Skill(props) {
    const popover = (
        <Popover>
            <Popover.Title as="h3">{ props.title}</Popover.Title>
            <Popover.Content>
                { props.content }
            </Popover.Content>
        </Popover>
    );

    const SkillExample = () => (
        <OverlayTrigger trigger="hover" placement="top" overlay={popover}>
            <Button variant="light" className="px-4 btn-block"> {props.title} </Button>
        </OverlayTrigger>
    );
    return (
        <SkillExample/>
    );
}
