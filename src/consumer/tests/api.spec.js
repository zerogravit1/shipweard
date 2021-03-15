const request = require('supertest');
const app = require('../app');

describe('test root path', () => {
  test('it should redirect the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(302);
  });

  test('it should provide a redirect response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.text).toEqual('Found. Redirecting to /status');
  });
});

describe('test status path', () => {
  test('it should respond to a GET method', async () => {
    const response = await request(app).get('/status');
    expect(response.statusCode).toBe(200);
  });

  test('it should provide a text response to a GET method', async () => {
    const response = await request(app).get('/status');
    expect(response.text).toEqual('request received');
  });
});

describe('test producer path', () => {
  let payload = {'unit test': 'body'};
  test('it should respond to a POST method', async () => {
    const response = await request(app).post('/producer').send(payload);
    expect(response.statusCode).toBe(201);
  });

  test('it should provide a text response', async () => {
    const response = await request(app).post('/producer').send(payload);
    expect(response.text).toEqual('file written.');
  });

  test('it should return an error', async () => {
    let data;
    const response = await request(app).post('/producer').send(data);
    expect(response.statusCode).toEqual(400);
  });
});