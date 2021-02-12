import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

export default function NewsCardList({
  cards, onSaveClick, isSave, location,
}) {
  const [count, setCount] = React.useState(3);
  function seeMore() {
    setCount(count + 3);
  }

  // function cardText(card) {
  //   const { text } = card.text;
  //   const size = 200;
  //   const end = '...';
  //   text.forEach(i => {
  //     let arr = i.innerHTML;

  //     if (i.innerHTML.length > size) {
  //       arr = arr.substr(0, size);
  //       i.innerHTML = arr + end;
  //     }
  //   });
  // }

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
