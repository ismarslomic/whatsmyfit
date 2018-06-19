import { expect } from 'chai';
import 'mocha';
import * as request from 'supertest';
import server from '../../../server';

describe('Waist', () => {
  it('should get all waist measurements', () =>
    request(server)
      .get('/api/v1/waist')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((r) => {
        expect(r.body)
          .to.be.an('array')
          .of.length(2)
          .and.include.keys('0', '1');
      }));

  it('should add a new waist measurement', () =>
    request(server)
      .post('/api/v1/waist')
      .send({ value: '88.0' })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((r) => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('value')
          .equal('88.0');
        expect(r.body)
          .to.be.an('object')
          .and.include.keys('type', 'id', 'registered', 'value');
      }));

  it('should get an waist measurement by id', () =>
    request(server)
      .get('/api/v1/waist/2')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((r) => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('value')
          .equal('88.0');
        expect(r.body)
          .to.be.an('object')
          .and.include.keys('type', 'id', 'registered', 'value');
      }));

  it('should throw 404 if waist measurement not found', () =>
    request(server)
      .get('/api/v1/waist/10')
      .expect(404),
  );
});
