import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { App } from '../src/App.tsx';

describe('App', () => {
  it('renders the Shipweard application', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: 'Shipweard' }),
    ).toBeDefined();
  });
});
