// src/components/SGPressKit.test.tsx

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SGPressKit from './SGPressKit';

describe('<SGPressKit />', () => {
  test('renders the SGPressKit component correctly', () => {
    render(
      <MemoryRouter>
        <SGPressKit />
      </MemoryRouter>
    );

    // Check for header elements
    expect(screen.getByText(/Smashit Games Press Kit/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Smashit Games Logo/i)).toBeInTheDocument();

    // Check for section headings
    expect(screen.getByText(/Company Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Founders/i)).toBeInTheDocument();
    expect(screen.getByText(/Mission Statement/i)).toBeInTheDocument();
    expect(screen.getByText(/Media Assets/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Information/i)).toBeInTheDocument();

    // Check for founder names
    expect(screen.getByText(/JB Hewitt/i)).toBeInTheDocument();
    expect(screen.getByText(/Luke Hewitt/i)).toBeInTheDocument();

    // Check for Back to Home link
    expect(screen.getByText(/← Back to Home/i)).toBeInTheDocument();
  });
});
