// /src/App.test.tsx

import { render, screen } from '@testing-library/react';
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
    const felSurvivorsLink = felSurvivorsImage.closest('a');
    expect(felSurvivorsLink).toHaveAttribute('href', 'https://smashit.games/felsurvivors');

    const discordLink = screen.getByLabelText(/Discord/i);
    expect(discordLink).toHaveAttribute('href', 'https://smashit.games/discord');

    expect(screen.getByRole('heading', { name: /access the feed/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter your email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /decrypt/i })).toBeInTheDocument();

    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} smashit\\.games`, 'i'))).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /privacy policy/i })).toHaveAttribute('href', '/privacy-policy');
  });
});
