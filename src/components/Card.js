import React from 'react'

function Card(props) {
    return (
        <div className="card">
            <div className="card-img"><img src={props.image} alt={props.image} /></div>

            <ul>
                <li className="card-heading">{props.heading}</li>
                <li className="card-content">{props.content}</li>
            </ul>

        </div>
    )
}

export default Card
