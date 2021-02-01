import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

export default function NewsCardList({ cards }) {
  return (
    <section className='results'>
      {cards.map((card) => <NewsCard card={card} key={card.title}/>)}
    </section>
  );
}
