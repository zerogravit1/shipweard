import request from 'supertest';
import { describe, expect, it, vi } from 'vitest';

import { createApp } from '../src/app.ts';
import { getGoDemo } from '../src/client/go-service-client.ts';

vi.mock('../src/client/go-service-client.ts', () => ({
  getGoDemo: vi.fn(),
}));

describe('GET /api/v1/go/demo', () => {
  it('returns the demo service response', async () => {
    vi.mocked(getGoDemo).mockResolvedValue({
      service: 'demo-service',
      message: 'Hello from the demo service',
    });

    const response = await request(createApp()).get('/api/v1/go/demo');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      service: 'demo-service',
      message: 'Hello from the demo service',
    });
  });
});
