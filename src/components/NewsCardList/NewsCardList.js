import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

export default function NewsCardList() {
  return (
    <section className='results'>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
    </section>
  );
}
