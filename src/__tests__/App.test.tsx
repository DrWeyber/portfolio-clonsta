import { render } from '@testing-library/react';
import { App } from '../App';

describe('App component', () => {
  test('should render', () => {
    const { container } = render(<App />);

    expect(container.firstChild).not.toBeNull();
  });
});
