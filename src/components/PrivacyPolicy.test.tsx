// src/components/PrivacyPolicy.test.tsx

import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import PrivacyPolicy from './PrivacyPolicy';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock fetch to simulate a loading delay for the markdown file
global.fetch = vi.fn(() =>
  delay(100).then(() =>
    Promise.resolve({
      text: () => Promise.resolve('## Privacy Policy\nThis is the privacy policy content.'),
    } as Response)
  )
);

describe('<PrivacyPolicy />', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the back button and check its properties', async () => {
    await act(async () => {
      render(<PrivacyPolicy />);
    });
    const backButton = screen.getByRole('button', { name: /back/i });
    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveClass('privacy-policy-button');
  });

  it('should show the loading spinner initially', async () => {
    await act(async () => {
      render(<PrivacyPolicy />);
    });
    const loadingSpinner = await screen.findByTestId('loading-spinner');
    expect(loadingSpinner).toBeInTheDocument();
  });

  it('should load and display the markdown content', async () => {
    await act(async () => {
      render(<PrivacyPolicy />);
    });
    const content = await screen.findByText(/privacy policy content/i);
    expect(content).toBeInTheDocument();
  });

  it('should remove the loading spinner after content loads', async () => {
    await act(async () => {
      render(<PrivacyPolicy />);
    });
    await screen.findByText(/privacy policy content/i);
    const loadingSpinner = screen.queryByTestId('loading-spinner');
    expect(loadingSpinner).not.toBeInTheDocument();
  });

  it('should call window.history.back when the back button is clicked', async () => {
    const mockBack = vi.fn();
    global.window.history.back = mockBack;
    render(<PrivacyPolicy />);
    const backButton = screen.getByRole('button', { name: /back/i });
    await userEvent.click(backButton);
    expect(mockBack).toHaveBeenCalled();
  });
});
