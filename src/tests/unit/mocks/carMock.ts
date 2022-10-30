import { ICar } from '../../../interfaces/ICar';

const carMock: ICar = {
  model: 'Fiat Uno',
  year: 1998,
  color: 'white',
  status: true,
  buyValue: 6500,
  doorsQty: 2,
  seatsQty: 5,
}

const carMockWithId: ICar & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Fiat Uno',
  year: 1998,
  color: 'white',
  status: true,
  buyValue: 6500,
  doorsQty: 2,
  seatsQty: 5,
}

const carMock2: ICar = {
  model: 'Lamborghini Aventador',
  year: 2018,
  color: 'blue',
  status: true,
  buyValue: 6500000,
  doorsQty: 2,
  seatsQty: 2,
}

const carMock2WithId1: ICar & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Lamborghini Aventador',
  year: 2018,
  color: 'blue',
  status: true,
  buyValue: 6500000,
  doorsQty: 2,
  seatsQty: 2,
}

const carMockWithId2: ICar & { _id: string } = {
  _id: '62cf1fc6498565d94eba52ce',
  model: 'Lamborghini Aventador',
  year: 2018,
  color: 'blue',
  status: true,
  buyValue: 6500000,
  doorsQty: 2,
  seatsQty: 2,
}

const carMockArray: ICar[] & { _id: string }[] = [
  carMockWithId,
  carMockWithId2
]

export { carMock, carMockWithId, carMock2, carMockWithId2, carMock2WithId1, carMockArray };
