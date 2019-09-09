import React from 'react';

const Card = ({ name, email,id }) => {
    return (
        <div className="bg-light-green dib grow pa3 ma2">
            <img src={`https://robohash.org/
            ${id}.png?size=200x200`} alt="robot"/>
            <h3> {name}</h3>
            <p>{email}</p>
        </div>
    );
}
export default Card;