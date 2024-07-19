import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import categoryRoutes from './routes/categoryRoutes';
import errorMiddleware from './middewares/errorMiddleware';


dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/api/v1/products', productRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/categories', categoryRoutes);

// Middleware de gestion des erreurs
app.use(errorMiddleware);

export default app;
