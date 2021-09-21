import React from 'react';
import Stars from './Stars';
import '../App.css';

 function functionStars  ({ count }) {
  let visible = true;
  if (!Number.isInteger(count) || count < 1 || count > 5) visible = false;
  return (
    visible && (
      < ul className="card-body-stars u-clearfix">
        {[...Array(count)].map(n => (
          <Stars key={n} />
        ))}
      </ul>
    )
  );
}


export default functionStars