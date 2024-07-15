import React, { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { RiSubtractFill } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
} from '../../redux/slices/cartslice';

import './incdecbtn.scss';

const IncDecBtn = ({ slug }) => {
  const { cartItems } = useSelector((state) => state.cslice);
  const individualQuantity = cartItems.find((item) => item.slug === slug);
  const dispatch = useDispatch();

  const minusQuantity = () => {
    dispatch(decrementQuantity(individualQuantity));
  };
  const addQuantity = () => {
    dispatch(incrementQuantity(individualQuantity));
  };
  return (
    <div className="container">
      <section className="button">
        {individualQuantity?.quantity > 1 && (
          <RiSubtractFill onClick={minusQuantity} />
        )}
      </section>
      {/* <div className="line" /> */}
      <section className="number">{individualQuantity?.quantity}</section>
      {/* <div className="line" /> */}
      <section className="button">
        {individualQuantity?.quantity < individualQuantity?.stock && (
          <IoMdAdd onClick={addQuantity} />
        )}
      </section>
    </div>
  );
};

export default IncDecBtn;
