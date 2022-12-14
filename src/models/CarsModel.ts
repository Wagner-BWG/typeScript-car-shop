import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

const carMongooseSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

class CarsModel extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('CarModel', carMongooseSchema)) {
    super(model);
  }
}

export default CarsModel;