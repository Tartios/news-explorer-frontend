import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';
import notFoundRes from '../../images/not-found-res.svg';
import Preloader from '../Preloader/Preloader';

export default function NewsCardList({
  cards,
  onSaveClick,
  toSaved,
  location,
  newsLoading,
  isLogged,
  deleteArticle,
}) {
  const [count, setCount] = React.useState(3);
  function seeMore() {
    setCount(count + 3);
  }

  function renderContent(cardArray) {
    if (cardArray === null) {
      return null;
    }
    if (cardArray.length === 0) {
      return (
        <section className='results'>
          <img src={notFoundRes} className='results__not-found-img' alt='Ничего не найдено :(' />
          <h2 className='results__not-found'>Ничего не найдено</h2>
          <p className='results__not-found-text'>К сожалению по вашему запросу ничего не найдено.</p>
        </section>
      );
    }
    return (
      <section className='results'>
        <h2 className='results__title'>Результаты поиска</h2>
        <div className='results__cards'>
        {cardArray.slice(0, count).map((card) => <NewsCard card={card} onSaveClick={onSaveClick} key={card.url} toSaved={toSaved} location={location} isLogged={isLogged} deleteArticle={deleteArticle} />)}
        </div>
        {count !== cards.length && count < cards.length ? <button className='results__button' onClick={seeMore}>Показать еще</button> : null}
      </section>
    );
  }

  return (
    <div>
      {newsLoading ? <section className='results'>
        <Preloader />
      </section> : null}
      {renderContent(cards)}
    </div>
  );
}
