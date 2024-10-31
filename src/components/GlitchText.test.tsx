// /src/components/GlitchText.test.tsx

import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import GlitchText from './GlitchText';

// Mock the Typewriter component to render text immediately
vi.mock('typewriter-effect', () => ({
  default: ({ options }: any) => <span>{options.strings}</span>,
}));

describe('<GlitchText />', () => {
  it('should render the GlitchText component with the provided text', () => {
    const testText = 'Test Glitch Text';
    render(<GlitchText text={testText} />);

    // Check that the text is displayed
    expect(screen.getByText(testText)).toBeInTheDocument();

    // Check that the element has the correct class
    const glitchElement = screen.getByText(testText).closest('h1');
    expect(glitchElement).toHaveClass('glitch');
  });
});
