import "./cartscard.scss";
const Cartscard = ({ img, title, desc }) => {
  return (
    <section className="carts_container">
      <section className="img_container">
        <img src={img} />
      </section>
      <section className="cart_content">
        <h2>{title}</h2>
        <p>{desc}</p>
      </section>
    </section>
  );
};

export default Cartscard;
