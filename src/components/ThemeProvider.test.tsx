import { render, screen, act } from '@testing-library/react';
import { useTheme, ThemeProvider } from './ThemeProvider';

// A more robust matchMedia mock
const createMatchMediaMock = () => {
  let listeners: ((event: { matches: boolean }) => void)[] = [];
  let matches = true; // Default to dark mode

  const mock = (query: string) => {
    return {
      matches,
      media: query,
      onchange: null,
      addListener: (listener: any) => listeners.push(listener),
      removeListener: (listener: any) => {
        listeners = listeners.filter((l) => l !== listener);
      },
      addEventListener: (event: string, listener: any) => {
        if (event === 'change') {
          listeners.push(listener);
        }
      },
      removeEventListener: (event: string, listener: any) => {
        if (event === 'change') {
          listeners = listeners.filter((l) => l !== listener);
        }
      },
      dispatchEvent: (event: Event) => {
        return true;
      },
    };
  };

  mock.triggerChange = (newMatches: boolean) => {
    matches = newMatches;
    listeners.forEach((listener) => listener({ matches }));
  };

  return mock;
};

const TestComponent = () => {
  const { theme } = useTheme();
  return <div data-testid="theme-consumer">{theme}</div>;
};

describe('ThemeProvider', () => {
  it('should update the theme when the system theme changes', () => {
    const matchMediaMock = createMatchMediaMock();
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(matchMediaMock),
    });

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    // Initial theme should be dark
    expect(screen.getByTestId('theme-consumer')).toHaveTextContent('dark');

    // Simulate system theme change to light
    act(() => {
      matchMediaMock.triggerChange(false);
    });

    // Theme should update to light
    expect(screen.getByTestId('theme-consumer')).toHaveTextContent('light');

    // Simulate system theme change back to dark
    act(() => {
      matchMediaMock.triggerChange(true);
    });

    // Theme should update to dark
    expect(screen.getByTestId('theme-consumer')).toHaveTextContent('dark');
  });
});
