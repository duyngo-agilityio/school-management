import { fireEvent, render } from '@testing-library/react';

// Components
import ErrorBoundary from '..';

const ErrorBoundaryProps = {
  error: new Error('Test Error'),
  reset: jest.fn(),
};

describe('ErrorBoundary Component', () => {
  it('Should render ErrorBoundary Component correctly', () => {
    const component = render(<ErrorBoundary {...ErrorBoundaryProps} />);

    expect(component).toMatchSnapshot();
  });

  it('renders error message and calls reset function when  button is clicked', () => {
    const { getByText } = render(<ErrorBoundary {...ErrorBoundaryProps} />);

    const tryAgainButton = getByText('Try again');
    fireEvent.click(tryAgainButton);

    expect(ErrorBoundaryProps.reset).toHaveBeenCalled();
  });
});
