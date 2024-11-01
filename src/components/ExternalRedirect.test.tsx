// src/components/ExternalRedirect.test.tsx

import { render } from '@testing-library/react';
import { vi } from 'vitest';
import ExternalRedirect from './ExternalRedirect';

describe('<ExternalRedirect />', () => {
  const originalLocation = window.location;

  beforeEach(() => {
    // Mock window.location.href using defineProperty
    Object.defineProperty(window, 'location', {
      value: { ...originalLocation, href: '' },
      writable: true,
    });
  });

  afterEach(() => {
    // Restore the original window.location after each test
    Object.defineProperty(window, 'location', {
      value: originalLocation,
      writable: true,
    });
    vi.clearAllMocks();
  });

  it('should redirect to the specified URL', () => {
    const testUrl = 'https://example.com';

    render(<ExternalRedirect to={testUrl} />);

    expect(window.location.href).toBe(testUrl);
  });
});
