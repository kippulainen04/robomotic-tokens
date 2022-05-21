import React from "react";

import './card.style.css'

export const Card = props => (
<div className='card-container'>
    <img 
     alt="robot" 
     src={`https://robohash.org/${props.robot.id}?size=180x180`}
     />
    <h2>{props.robot.name}</h2>
    <p>{props.robot.email}</p>
</div>
)  
