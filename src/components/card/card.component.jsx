import React from 'react';
import "./card.styles.css";

const Card = ({ monster }) => (

    <div className="card">
        <img src={`https://robohash.org/${monster.id}?set=set5`} alt="monster" width="300" height="300" />
        <h1 >{monster.name}</h1>
        <p>{monster.email}</p>
    </div>
);

export default Card;
