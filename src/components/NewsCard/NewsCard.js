import React, { useEffect } from 'react';
import './NewsCard.css';

export default function NewsCard({
  card,
  location,
  isLogged,
  toSaved,
  deleteArticle,
}) {
  const [hoverOnButton, setHoverOnButton] = React.useState(false);
  const [isSave, setSave] = React.useState(false);
  function articleSaved(id) {
    if (!id) {
      return null;
    }
    return setSave(true);
  }
  useEffect(() => {
    articleSaved(card._id);
  }, []);
  const keyword = `${location.pathname === '/' ? null : card.keyword}`;
  const title = `${card.title}`;
  const text = `${location.pathname === '/' ? card.description : card.text}`;
  const date = `${location.pathname === '/' ? card.publishedAt : card.date}`;
  const source = `${location.pathname === '/' ? card.source.name : card.source}`;
  const link = `${location.pathname === '/' ? card.url : card.link}`;
  const image = `${location.pathname === '/' ? card.urlToImage : card.image}`;

  function dateFormat(dateForFormating) {
    const newDate = new Date(Date.parse(dateForFormating));
    const options = {
      month: 'long',
      day: 'numeric',
    };
    const day = newDate.toLocaleString('ru', options);
    const year = dateForFormating.slice(0, 4);
    return `${day}, ${year}`;
  }

  function handleSaveArticle() {
    if (isSave) {
      setSave(false);
      deleteArticle(card._id);
    } else {
      setSave(true);
      toSaved({
        keyword: card.keyword,
        title: card.title,
        text: card.description,
        date: card.publishedAt,
        source: card.source.name,
        link: card.url,
        image: card.urlToImage,
      });
    }
  }

  function handleDeleteArticle() {
    deleteArticle(card._id);
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
    let textInArticle = newsCard;
    const end = '...';
    const size = () => {
      if (`${window.innerWidth}` > 1228) {
        return 140;
      }
      return 70;
    };
    if (textInArticle.length > size()) {
      let i = textInArticle.slice(0, size());
      i += end;
      textInArticle = i;
    } else {
      return textInArticle;
    }
    return textInArticle;
  }

  return (
      <div className='card'>
          <a src={link} className='card__link'>
            <img className='card__image' src={image} alt='фото статьи' />
          </a>
          <div className={`card__info-window ${hoverOnSavebutton}`}>
            {location.pathname === '/' ? <p className='card__info-window-title'>Войдите, чтобы сохранять статьи</p> : <p className='card__info-window-title'>Убрать из сохраненных</p>}
          </div>
            {location.pathname === '/' ? <button type='submit' className={`card__save-button ${isSaved}`} onClick={isLogged ? handleSaveArticle : null} onMouseEnter={isLogged ? null : handleHoverOnButton} onMouseLeave={isLogged ? null : handleHoverOnButtonLeave} /> : <button type='submit' className='card__delete-button' onClick={isLogged ? handleDeleteArticle : null} onMouseEnter={handleHoverOnButton} onMouseLeave={handleHoverOnButtonLeave}></button>}
          <div className='card__info'>
            {location.pathname === '/saved-news' ? <div className='card__tag'><p className='card__tag-name'>{keyword}</p></div> : null}
            <p className='card__date'>{dateFormat(date)}</p>
            <h3 className='card__title'>{title}</h3>
            <p id='text-container' className='card__text'>{textLength(text)}</p>
            <p className='card__source'>{source}</p>
          </div>
      </div>
  );
}
