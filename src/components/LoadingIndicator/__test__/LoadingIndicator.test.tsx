import { render } from '@testing-library/react';

// Components
import LoadingIndicator from '..';

describe('LoadingIndicator component', () => {
  test('should match snapshot', () => {
    const { container } = render(<LoadingIndicator />);

    expect(container).toMatchSnapshot();
  });
});
