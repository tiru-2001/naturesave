import mongoose from 'mongoose';
const productSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      // required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    star: {
      type: Number,
    },
    numberOfReviews: {
      type: Number,
    },
  },
  { timestamps: true }
);

const productmodel = mongoose.model('productmodel', productSchema);
export default productmodel;
