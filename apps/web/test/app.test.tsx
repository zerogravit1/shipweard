import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { App } from '../src/App.tsx';

describe('App', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders the Shipweard application', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: async () => ({
          status: 'ok',
        }),
      }),
    );

    render(<App />);

    expect(screen.getByRole('heading', { name: 'Shipweard' })).toBeDefined();

    expect(await screen.findByText('API Health Check: ok')).toBeDefined();
  });
});
