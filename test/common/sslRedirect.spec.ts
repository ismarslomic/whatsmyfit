import 'mocha';
import * as request from 'supertest';
import server from '../../server';

describe('SslRedirect', () => {
  const originalEnv = process.env.NODE_ENV;

  before(() => {
    process.env.NODE_ENV = 'staging';
  });

  after(() => {
    process.env.NODE_ENV = originalEnv;
  });

  it('should redirect to HTTPS when using HTTP', () =>
    request(server)
      .get('/api/v1/waist')
      .expect(301),
  );
});
