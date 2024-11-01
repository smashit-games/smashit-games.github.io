// src/components/TerminalModal.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import TerminalModal from './TerminalModal';
import { MemoryRouter } from 'react-router-dom';

describe('<TerminalModal />', () => {
  it('should not render when isOpen is false', () => {
    const { container } = render(
      <MemoryRouter>
        <TerminalModal isOpen={false} />
      </MemoryRouter>
    );
    expect(container.firstChild).toBeNull();
  });

  it('should render when isOpen is true', () => {
    render(
      <MemoryRouter>
        <TerminalModal isOpen={true} />
      </MemoryRouter>
    );
    expect(screen.getByText(/Meta Store Demo/i)).toBeInTheDocument();
    expect(screen.getByText(/^Meta Store$/i)).toBeInTheDocument();
    expect(screen.getByText(/PressKit/i)).toBeInTheDocument();
  });

  it('should have correct links', () => {
    render(
      <MemoryRouter>
        <TerminalModal isOpen={true} />
      </MemoryRouter>
    );

    const demoLink = screen.getByText(/Meta Store Demo/i).closest('a');
    const storeLink = screen.getByText(/^Meta Store$/i).closest('a');
    const presskitLink = screen.getByText(/PressKit/i).closest('a');

    expect(demoLink).toHaveAttribute('href', 'https://www.meta.com/store/demo-link');
    expect(storeLink).toHaveAttribute('href', 'https://www.meta.com/store/main-game-link');
    expect(presskitLink).toHaveAttribute('href', '/fspresskit');
  });
});
