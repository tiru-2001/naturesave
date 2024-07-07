import React from "react";
import "./Aboutus.scss";
import sideimage from "../../assets/sideimage.png";
import { FaTruckFast } from "react-icons/fa6";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
const Aboutus = () => {
  return (
    <section className="main_section">
      <section className="first_section">
        <h1>Discover Nature Save</h1>
      </section>
      <section className="middle_section">
        <section className="middle_left">
          <section className="heading">
            <h1>The Best Solution of Solar
            Energy and Water
             Treatment.</h1>
          </section>
          <section className="description">
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </section>
        </section>
        <section className="middle_right">
          <img src={sideimage} alt="image" />
        </section>
      </section>
      <section className="bottom_section">
        <section className="bottom_left">
          <section className="left_top">
          <div className='round'>
            <div className="inner-circle"><FaTruckFast   style={{fontSize:"2.5rem",color:"white"}}/>
          </div>
          </div>
           
          </section>
          <section className="left_bottom">
          <h2>FREE AND FAST DELIVERY</h2>
            <p>Free delivery for all orders over $5</p>
          </section>
        </section>
        <section className="bottom_right">
          <section className="right_top">
          <div className='round'>
          <div className="inner-circle">
          <IoShieldCheckmarkSharp style={{fontSize:"2.5rem",color:"white"}}/>
          </div>
          </div>
            
          </section>
          <section className="right_bottom">
          <h2>QUALITY ASSURED</h2>
            <p>We provide the best quality products</p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Aboutus;
