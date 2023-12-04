import React from 'react';
import Star from './Star';
import '../App.css';

interface CountProps {
  count: number,
}

function Stars({ count }: CountProps) {
  const setCount = (count: number) => {
    if (count < 1 || count > 5 || !count) count = 0;
    return count;
  };

  const starsArray = Array(setCount(count)).fill('');

  return (
    <ul className='card-body-stars u-clearfix'>
      {starsArray.length ? starsArray.map((_, i) => <Star key={i}/>) : false}
    </ul>
  )
}

export default Stars;
