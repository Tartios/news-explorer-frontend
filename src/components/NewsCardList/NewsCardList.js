import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

export default function NewsCardList({ cards }) {
  const [count, setCount] = React.useState(3);
  function seeMore() {
    setCount(count + 3);
  }
  return (
    <section className='results'>
      <h2 className='results__title'>Результаты поиска</h2>
      <div className='results__cards'>
      {cards.slice(0, count).map((card) => <NewsCard card={card} key={card.title}/>)}
      </div>
      {/* тени не забыть под карточками */}
      <button className='results__button' onClick={seeMore}>Показать еще</button>
    </section>
  );
}
