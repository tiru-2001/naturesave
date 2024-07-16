import { Link, useParams } from 'react-router-dom';

// export default IndividualProduct;
import React, { useState, useEffect } from 'react';
import './individualproduct.scss';
import { FaTruckFast } from 'react-icons/fa6';
import { VscTools } from 'react-icons/vsc';
import { Rating } from '../../components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTocart } from '../../redux/slices/cartslice';
import { getProductBySlug } from '../../redux/actions/product';

const ProductPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { productBySlug } = useSelector((state) => state.productslice);
  const [gotobag, setGotoBag] = useState(false);

  const addToCartFunc = () => {
    setGotoBag(true);
    const productData = { ...productBySlug, quantity: 1 };
    dispatch(addTocart(productData));
  };

  useEffect(() => {
    dispatch(getProductBySlug(slug));
  }, []);
  return (
    <>
      <section className="indproduct_container">
        <section className="section_1">
          <section className="s1_left">
            <img src={productBySlug?.img} alt="solar_panel_image" />
          </section>
          <section className="s1_right">
            <section className="s1r_top">
              <h2>{productBySlug?.name}</h2>
              <section className="s1r_topRating">
                <section className="star"></section>
                <div className="line" />
                <section className="avail">
                  {productBySlug?.stock > 0 ? (
                    <p style={{ color: 'green' }}>In stock</p>
                  ) : (
                    <p style={{ color: 'red' }}>out of stock</p>
                  )}
                </section>
              </section>
              <p className="cost">&#8377; {productBySlug?.price}</p>
              <p>{productBySlug?.desc}</p>
              <Rating
                star={productBySlug?.star}
                reviews={productBySlug?.numberOfReviews}
                showReviews={true}
              />
              <hr />
            </section>
            <section className="s1r_middle">
              <section className="cart">
                {productBySlug?.stock > 0 ? (
                  <>
                    {gotobag ? (
                      <>
                        <button>
                          <Link to={'/cart'}>Go to Cart</Link>
                        </button>
                      </>
                    ) : (
                      <button onClick={addToCartFunc}>Add to Cart</button>
                    )}
                  </>
                ) : (
                  <h3 style={{ color: 'red', fontWeight: 'bold' }}>
                    Out of Stock
                  </h3>
                )}
              </section>
            </section>
            <section className="s1r_bottom">
              <section className="feature">
                <section className="f_left">
                  <FaTruckFast style={{ fontSize: '2.5rem' }} />
                </section>
                <section className="f_right">
                  <h3>Free Delivery</h3>
                  <p>Enter your postal code for Delivery Availability</p>
                </section>
              </section>
              <section className="feature">
                <section className="f_left">
                  <VscTools style={{ fontSize: '2.5rem' }} />
                </section>
                <section className="f_right">
                  <h3>Installation Included</h3>
                  <p>Installation provided with every purchase</p>
                </section>
              </section>
            </section>
          </section>
        </section>
        {/* <section className="section_2">
          <section className="s2_description">
            <h2>Warranty Details</h2>
            <p>Inverter Warranty : 2 Years On-site warranty</p>
            <p>Battery Warranty : 36 Months</p>
          </section>
          <section className="s2_description">
            <h2>Product Description</h2>
            <p>Inverter Type : Sine Wave</p>
            <p>Battery Type : Tall Tubular</p>
            <p>Capacity : 2000 VA</p>
            <p>Battery Capacity : 150AH Inverter</p>
          </section>
          <section className="s2_description">
            <h2>Technical Specifications</h2>
            <p>Inverter VA & Waveform : JM 2000Va Sinewave output</p>
            <p>
              Battery Model & Capacity : EB 1800 – 150 Ah tall tubular 2 nos
            </p>
          </section>
        </section> */}
        {/* <section className="section_3">
          <section className="box" />
          <h2>Related Item</h2>
        </section> */}
        {/* <section className="section_4">
          {relatedItemData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </section> */}
      </section>
    </>
  );
};

export default ProductPage;
