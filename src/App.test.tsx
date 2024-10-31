// /src/App.test.tsx

import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';

// Mock the Typewriter component to prevent animation delays during testing
vi.mock('typewriter-effect', () => ({
  default: ({ options }: any) => <span>{options.strings}</span>,
}));

describe('<App />', () => {
  it('should render the App component correctly', () => {
    render(<App />);

    // Check that the mission statement is displayed
    expect(screen.getByText(/All Systems Nominal/i)).toBeInTheDocument();

    // Check that the Fel Survivors logo is displayed and linked
    const felSurvivorsImage = screen.getByAltText(/Fel Survivors/i);
    expect(felSurvivorsImage).toBeInTheDocument();
    const felSurvivorsLink = felSurvivorsImage.closest('a');
    expect(felSurvivorsLink).toHaveAttribute('href', 'https://smashit.games/felsurvivors');

    // Check that the social icon link to Discord is present
    const discordLink = screen.getByLabelText(/Discord/i);
    expect(discordLink).toHaveAttribute('href', 'https://smashit.games/discord');

    // Check that the mailing list heading is displayed
    expect(screen.getByRole('heading', { name: /access the feed/i })).toBeInTheDocument();

    // Check that the input field is present with placeholder
    expect(screen.getByPlaceholderText(/enter your email/i)).toBeInTheDocument();

    // Check that the button is present with text 'decrypt'
    expect(screen.getByRole('button', { name: /decrypt/i })).toBeInTheDocument();

    // Check that the footer contains the correct text and link
    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} smashit\\.games`, 'i'))).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /privacy policy/i })).toHaveAttribute('href', '/privacy-policy');
  });
});
