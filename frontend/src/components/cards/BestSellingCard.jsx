import './bestselling.scss';
import { Link } from 'react-router-dom';
import { Rating } from '../../components/index';

const BestSellingCard = ({
  img,
  desc,
  name,
  price,
  slug,
  numberOfReviews,
  star,
}) => {
  return (
    <Link to={`/product/${slug}`} className="card_container">
      <section className="card_image">
        <img src={img} alt="" />
      </section>
      <section className="card_content">
        <section className="star_section">
          <Rating star={star} reviews={numberOfReviews} showReviews={false} />
          <p>{desc}</p>
        </section>
        <h3>{name}</h3>
        <section className="price">
          <p className="price"> &#8377;{price}</p>
        </section>
      </section>
    </Link>
  );
};

export default BestSellingCard;
