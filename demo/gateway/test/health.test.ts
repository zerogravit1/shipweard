import request from 'supertest';
import { describe, expect, it } from 'vitest';

import { createApp } from '../src/app.ts';

describe('GET /health', () => {
  it('reports that the gateway is healthy', async () => {
    const response = await request(createApp()).get('/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 'ok'
    });
  });
});
