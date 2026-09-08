import request from 'supertest';
import { describe, expect, it } from 'vitest';

import { createApp } from '../src/app.ts';

describe('GET /api/v1/demo', () => {
  it('reports that the server is running', async () => {
    const response = await request(createApp()).get('/api/v1/demo');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      service: 'demo-gateway',
      message: 'Hello from the demo gateway',
    });
  });
});
