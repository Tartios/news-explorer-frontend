import React from 'react';
import './NewsCard.css';

export default function NewsCard({ card, location }) {
  const [hoverOnButton, setHoverOnButton] = React.useState(false);
  const [isSave, setSave] = React.useState(false);
  function handleSaveNews() {
    setSave(true);
  }

  function handleHoverOnButton() {
    setHoverOnButton(true);
  }

  function handleHoverOnButtonLeave() {
    setHoverOnButton(false);
  }

  const hoverOnSavebutton = `${hoverOnButton ? 'card__info-window_true' : ''}`;

  const isSaved = `${isSave ? 'card__save-button_saved' : ''}`;

  function textLength(newsCard) {
    let text = newsCard;
    const end = '...';
    const size = () => {
      if (`${window.innerWidth}` > 1228) {
        return 140;
      }
      return 70;
    };
    size();
    console.log(size());
    if (text.length > size()) {
      let i = text.slice(0, size());
      i += end;
      text = i;
    } else {
      return text;
    }
    return text;
  }

  return (
      <div className='card'>
          <img className='card__image' src={card.image} alt='фото статьи' />
          <div className={`card__info-window ${hoverOnSavebutton}`}>
            <p className='card__info-window-title'>Войдите, чтобы сохранять статьи</p>
            </div>
          {location.pathname === '/' ? <button type='submit' className={`card__save-button ${isSaved}`} onClick={handleSaveNews} onMouseEnter={handleHoverOnButton} onMouseLeave={handleHoverOnButtonLeave} /> : <button type='submit' className='card__delete-button'></button>}
          <div className='card__info'>
              {location.pathname === '/saved-news' ? <div className='card__tag'><p className='card__tag-name'>{card.tag}</p></div> : ''}
              <p className='card__date'>{card.date}</p>
              <h3 className='card__title'>{card.title}</h3>
              <p id='text-container' className='card__text'>{textLength(card.text)}</p>
              <p className='card__source'>{card.source}</p>
          </div>
      </div>
  );
}
