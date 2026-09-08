import request from 'supertest';
import { describe, expect, it, vi } from 'vitest';

import { createApp } from '../src/app.ts';
import { getDemo } from '../src/services/demo-service.ts';

vi.mock('../src/services/demo-service.ts', () => ({
  getDemo: vi.fn(),
}));

describe('GET /api/v1/demo', () => {
  it('returns the demo service response', async () => {
    vi.mocked(getDemo).mockResolvedValue({
      service: 'demo-service',
      message: 'Hello from the demo service',
    });

    const response = await request(createApp()).get('/api/v1/demo');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      service: 'demo-service',
      message: 'Hello from the demo service',
    })
  });
});
