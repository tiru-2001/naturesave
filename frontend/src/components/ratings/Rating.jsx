import React from 'react';
import Stars from '../stars/Stars';

const Rating = ({ star, reviews, showReviews }) => {
  return (
    <section className="rating_maingcontainer">
      <Stars star={star} />
      {showReviews && <span>({reviews}) reviews</span>}
    </section>
  );
};

export default Rating;
