// src/components/FSPresskit.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import FSPressKit from './FSPressKit';

describe('<FSPresskit />', () => {
  it('should render the presskit page correctly', () => {
    render(<FSPressKit />);

    expect(screen.getByRole('heading', { name: 'Fel Survivors PressKit' })).toBeInTheDocument();

    expect(
      screen.getByText(/Welcome to the Fel Survivors presskit page/i)
    ).toBeInTheDocument();
  });
});
