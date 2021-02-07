import React from 'react';
import './NewsCard.css';

export default function NewsCard({ card, onSaveClick }) {
  const [hoverOnButton, setHoverOnButton] = React.useState(false);

  function handleSaveNews() {
    onSaveClick(card);
  }

  function handleHoverOnButton() {
    setHoverOnButton(true);
  }

  function handleHoverOnButtonLeave() {
    setHoverOnButton(false);
  }

  const hoverOnSavebutton = `${hoverOnButton ? 'card__info-window_true' : ''}`;

  return (
      <div className='card'>
          <img className='card__image' src={card.image} />
          <div className={`card__info-window ${hoverOnSavebutton}`}>
            <p className='card__info-window-title'>Войдите, чтобы сохранять статьи</p>
            </div>
          <button className='card__save-button' onClick={handleSaveNews} onMouseEnter={handleHoverOnButton} onMouseLeave={handleHoverOnButtonLeave} />
          <div className='card__info'>
              <p className='card__date'>{card.date}</p>
              <h3 className='card__title'>{card.title}</h3>
              <p className='card__text'>{card.text}</p>
              <p className='card__source'>{card.source}</p>
          </div>
      </div>
  );
}
