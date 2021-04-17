import React from 'react'

export default function Social(props) {

    return (
        <a href={props.link}>
            <object type="image/svg+xml" data={props.src}></object>
        </a>
    )
}