// src/App.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import App from './App';

vi.mock('typewriter-effect', () => ({
  default: ({ options }: any) => <span>{options.strings}</span>,
}));

describe('<App />', () => {
  it('should render the App component correctly', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/All Systems Nominal/i)).toBeInTheDocument();

    const felSurvivorsImage = screen.getByAltText(/Fel Survivors/i);
    expect(felSurvivorsImage).toBeInTheDocument();

    // Simulate clicking the logo to open the modal
    fireEvent.click(felSurvivorsImage);

    // Check that the modal is displayed
    expect(screen.getByText(/Meta Store Demo/i)).toBeInTheDocument();
    expect(screen.getByText(/^Meta Store$/i)).toBeInTheDocument();
    expect(screen.getByText(/PressKit/i)).toBeInTheDocument();

    const discordLink = screen.getByLabelText(/Discord/i);
    expect(discordLink).toHaveAttribute('href', '/discord');

    // Adjusted test for the email input placeholder
    expect(screen.getByPlaceholderText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /decrypt/i })).toBeInTheDocument();

    expect(
      screen.getByText(new RegExp(`© ${new Date().getFullYear()} smashit\\.games`, 'i'))
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /privacy policy/i })).toHaveAttribute(
      'href',
      '/privacy-policy'
    );
  });
});
