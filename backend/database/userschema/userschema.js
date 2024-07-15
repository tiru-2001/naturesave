import mongoose from 'mongoose';
const userschema = new mongoose.Schema(
  {
    isAdmin: { type: Boolean, default: false },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const user = mongoose.model('user', userschema);
export default user;
