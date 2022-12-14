import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';
import carsRoute from './routes/CarsRoutes';

const app = express();

app.use(express.json());
app.use(carsRoute);
app.use(errorHandler);

export default app;
