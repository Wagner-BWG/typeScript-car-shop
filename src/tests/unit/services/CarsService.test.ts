import * as sinon from 'sinon';
import { expect } from 'chai';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import CarsModel from '../../../models/CarsModel';
import CarsService from '../../../services/CarsService';
import { carMock, carMockWithId, carMock2, carMock2WithId1, carMockArray } from '../mocks/carMock';

describe('CarsService', () => {
  const carsModel = new CarsModel();
  const carsService = new CarsService(carsModel);

  before(async () => {
    sinon.stub(carsModel, 'create').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Creating an entry', () => {
    it('Sucess', async () => {
      const newEntry = await carsService.create(carMock);
      expect(newEntry).to.be.deep.equal(carMockWithId);
    })

    it('Fail', async () => {
      let error;
			try {
				await carsService.create({ invalid: 'Object' });
			} catch (err) {
				error = err
			}

			expect(error).to.be.instanceOf(ZodError);
    })
  });

});