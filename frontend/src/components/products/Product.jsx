import Carousel from '../carousel/Carousel';
import BestSellingCard from '../cards/BestSellingCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from '../../redux/actions/product';
const Product = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    console.log(state.productslice);
    return state.productslice.allproducts;
  });
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <section className="">
      <Carousel infinite={false} autoplay={false}>
        {data?.map((item) => (
          <BestSellingCard key={item._id} {...item} />
        ))}
      </Carousel>
    </section>
  );
};

export default Product;
