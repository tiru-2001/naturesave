import { IncDecBtn } from '../../index';
import './cartItem.scss';
import cartimage from '../../../assets/cartimage.png';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../../../redux/slices/cartslice';
const CartItems = ({ price, slug, quantity, title }) => {
  const dispatch = useDispatch();
  const deleteIndividualItem = () => {
    dispatch(deleteItem(slug));
  };
  return (
    <>
      <section className="s2_leftItem">
        <section className="indiItem">
          <img src={cartimage} alt="image" />
          <section className="itemDesc">
            <h3>{title}</h3>
            <p>Quantity: {quantity} </p>
            <h2>₹ {price}</h2>
          </section>
        </section>
        <section className="itemButtons">
          <button>
            <RiDeleteBin6Line
              style={{ cursor: 'pointer' }}
              onClick={deleteIndividualItem}
            />
          </button>
          <IncDecBtn slug={slug} />
        </section>
      </section>
      <hr />
    </>
  );
};

export default CartItems;
