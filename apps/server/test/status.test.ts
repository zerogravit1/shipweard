import request from 'supertest';
import { describe, expect, it } from 'vitest';

import { createApp } from '../src/app.ts';

describe('GET /api/status', () => {
  it('reports that the server is running', async () => {
    const response = await request(createApp()).get('/api/status');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 'ok',
    });
  });
});
