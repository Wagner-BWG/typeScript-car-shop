import { Router } from 'express';
import CarsController from '../controllers/CarsController';
import CarsModel from '../models/CarsModel';
import CarsService from '../services/CarsService';

const carsRoute = Router();

const carsModel = new CarsModel();
const carsService = new CarsService(carsModel);
const carsController = new CarsController(carsService);

carsRoute.post('/cars', (req, res) => carsController.create(req, res));
carsRoute.get('/cars', (req, res) => carsController.readAll(req, res));

export default carsRoute;