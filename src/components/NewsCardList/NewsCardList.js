import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';
import notFoundRes from '../../images/not-found-res.svg';
// import Preloader from '../Preloader/Preloader';

export default function NewsCardList({
  cards, onSaveClick, isSave, location,
}) {
  const [count, setCount] = React.useState(3);
  const arrCards = null;
  // const arrCards = 0;
  // const arrCards = cards;

  function seeMore() {
    setCount(count + 3);
  }

  function renderContent() {
    if (arrCards === null) {
      return null;
    }
    if (arrCards === 0) {
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
        {cards.slice(0, count).map((card) => <NewsCard card={card} onSaveClick={onSaveClick} key={card.title} isSave={isSave} location={location} />)}
        </div>
        <button className='results__button' onClick={seeMore}>Показать еще</button>
      </section>
    );
  }

  return (
    <div>
      {/* <section className='results'>
        <Preloader />
      </section> */}
      {renderContent()}
    </div>
  );
}
