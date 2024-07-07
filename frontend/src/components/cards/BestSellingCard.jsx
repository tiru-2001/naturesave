import "./bestselling.scss";
const BestSellingCard = ({ img, subtitle, title, price }) => {
  return (
    <section className="card_container">
      <section className="card_image">
        <img src={img} alt="" />
      </section>
      <section className="card_content">
        <section className="star_section">
          <p>{subtitle}</p>
        </section>
        <h3>{title}</h3>
        <section className="price">
          <p className="price"> &#8377;{price}</p>
        </section>
      </section>
    </section>
  );
};

export default BestSellingCard;
