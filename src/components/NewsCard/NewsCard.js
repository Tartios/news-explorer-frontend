import React from 'react';

export default function NewsCard() {
    return (
        <div>
            <img src={image} />
            <div>
                <p>{date}</p>
                <h3>{title}</h3>
                <p>{text}</p>
                <p>{source}</p>
            </div>
        </div>
    )
}