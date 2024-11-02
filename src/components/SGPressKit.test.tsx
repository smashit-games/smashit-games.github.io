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
    expect(screen.getByText(/Press Kit/i)).toBeInTheDocument();
    expect(screen.getByAltText(/smashit.games Logo/i)).toBeInTheDocument();

    // Check for section headings
    expect(screen.getByText(/Who We Are/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the Team/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Mission/i)).toBeInTheDocument();
    expect(screen.getByText(/Media Assets/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();

    // Check for founder names using getAllByText to handle duplicates
    expect(screen.getAllByText(/JB Hewitt/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Luke Hewitt/i).length).toBeGreaterThan(0);

    // Check for Back to Home link
    expect(screen.getByText(/← Back to Home/i)).toBeInTheDocument();
  });
});
