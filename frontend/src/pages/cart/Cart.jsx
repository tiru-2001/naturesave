import React from 'react';
import './cart.scss';
import { FaArrowRight } from 'react-icons/fa6';

import { useSelector } from 'react-redux';
import { CartItems } from '../../components';
const Cart = () => {
  const cartitems = useSelector((state) => {
    console.log(state);
    return state.cslice;
  });
  console.log(cartitems);
  return (
    <>
      <section className="main_section">
        <section className="section_1">
          <h2>Your Cart</h2>
        </section>
        <section className="section_2">
          <section className="s2_left">
            {cartitems?.cartItems?.map((item, ind) => (
              <CartItems key={ind} {...item} />
            ))}
          </section>
          <section className="s2_right">
            <h3>Order Summary</h3>
            <section className="order_detailS2">
              <div className="priceList">
                <p className="name">Subtotal</p>
                <p className="rupees">{cartitems.totalPrice}</p>
              </div>
              <div className="priceList">
                <p className="name">Discount </p>
                <p className="rupees">0</p>
              </div>
              <div className="priceList">
                <p className="name">Delivery Fee</p>
                <p className="rupees">0</p>
              </div>
              <hr />
              <div className="priceList">
                <p className="name">Total</p>
                <p className="rupees">₹ {cartitems.totalPrice}</p>
              </div>
            </section>
            <section className="apply">
              <button className="promoButton">Add promo code</button>
              <button className="applyButton">Apply</button>
            </section>
            <section className="checkout">
              <button className="checkoutButton">
                <span>Go to Checkout </span>
                <FaArrowRight />
              </button>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Cart;
