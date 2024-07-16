import express from 'express';
const app = express();
import dotenv from 'dotenv';
import cors from 'cors';
import colors from 'colors';
import cookieParser from 'cookie-parser';
import connectToDb from './config/connect.js';
import authroute from './routes/auth.route.js';
import contactroute from './routes/contact.route.js';
import productroute from './routes/product.route.js';

dotenv.config();
app.use(cookieParser());
app.use(
  cors({
    // origin: 'https://naturesavefrontend.vercel.app',
    // origin: 'http://localhost:5173',
  })
);
connectToDb();
const port = process.env.PORT || 7000;
app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'hi' });
});
//authentication request
app.use('/api/v1/auth', authroute);
//contact request
app.use('/api/v1/contact', contactroute);
//product request
app.use('/api/v1/product', productroute);
app.listen(port, () => {
  console.log(colors.magenta.italic('listening on port'));
});
