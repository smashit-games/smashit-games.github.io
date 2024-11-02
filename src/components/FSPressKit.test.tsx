// src/components/FSPressKit.test.tsx

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FSPressKit from './FSPressKit';

describe('<FSPressKit />', () => {
  test('renders the FSPressKit component correctly', () => {
    render(
      <MemoryRouter>
        <FSPressKit />
      </MemoryRouter>
    );
  });
});
