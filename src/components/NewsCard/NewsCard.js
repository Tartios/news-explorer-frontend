import React from 'react';
import './NewsCard.css';

export default function NewsCard({ card }) {
  return (
      <div className='card'>
          <img className='card__image' src={card.image} />
          <div className='card__info'>
              <p className='card__date'>{card.date}</p>
              <h3 className='card__title'>{card.title}</h3>
              <p className='card__text'>{card.text}</p>
              <p className='card__source'>{card.source}</p>
          </div>
      </div>
  );
}
