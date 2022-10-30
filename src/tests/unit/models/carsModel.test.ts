// template para criação dos testes de cobertura da camada de model


import { expect } from 'chai';
import * as sinon from 'sinon';
import CarsModel from '../../../models/CarsModel';
import { Model } from 'mongoose';
import { carMock, carMockWithId, carMock2, carMock2WithId1, carMockArray } from '../mocks/carMock';

describe('Car Model', () => {
  const carsModel = new CarsModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves(carMockArray);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMock2WithId1);
    sinon.stub(Model, 'findByIdAndDelete').resolves();
  });

  after(()=>{
    sinon.restore();
  })

  describe('Creating a new entry', () => {
    it('sucessfully created', async () => {
      const newEntry = await carsModel.create(carMock);
      expect(newEntry).to.be.deep.equal(carMockWithId);
    })
  });

  describe('Reading an entry', () => {
    it('sucessfully found', async () => {
      const foundEntry = await carsModel.readOne('62cf1fc6498565d94eba52cd');
      expect(foundEntry).to.be.deep.equal(carMockWithId);
    })
  });

  describe('Reading many entries', () => {
    it('sucessfully found', async () => {
      const foundEntry = await carsModel.read();
      expect(foundEntry).to.be.deep.equal(carMockArray);
    })
  });

  describe('Updating an entry', () => {
    it('sucessfully updated', async () => {
      const foundEntry = await carsModel.update(carMockWithId._id, carMock2);
      expect(foundEntry).to.be.deep.equal(carMock2WithId1);
    })
  });

  describe('Deleteing an entry', () => {
    it('sucessfully deleted', async () => {
      const foundEntry = await carsModel.delete(carMockWithId._id);
      expect(foundEntry).to.be.deep.equal(undefined);
    })
  });

});