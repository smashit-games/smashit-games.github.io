import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

  it('should display "Coming Soon" on hover over Meta Store Demo and Meta Store links', () => {
    render(
      <MemoryRouter>
        <TerminalModal isOpen={true} />
      </MemoryRouter>
    );

    // Hover over Meta Store Demo
    const demoElement = screen.getByText('Meta Store Demo');
    fireEvent.mouseEnter(demoElement);
    expect(screen.getByText('Coming Soon')).toBeInTheDocument();

    // Hover over Meta Store
    const storeElement = screen.getByText('Meta Store');
    fireEvent.mouseLeave(demoElement); // Remove hover from demoElement
    fireEvent.mouseEnter(storeElement);
    expect(screen.getByText('Coming Soon')).toBeInTheDocument();
  });

  it('should have a working link for PressKit', () => {
    render(
      <MemoryRouter>
        <TerminalModal isOpen={true} />
      </MemoryRouter>
    );

    const presskitLink = screen.getByText(/PressKit/i).closest('a');
    expect(presskitLink).toHaveAttribute('href', '/fel-survivors-presskit');
  });
});
