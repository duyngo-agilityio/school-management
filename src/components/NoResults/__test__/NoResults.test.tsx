import { render } from '@testing-library/react';

// Components
import NoResults from '..';

const NoResultsProps = {
  title: 'Page Not Found',
  src: '/no-notification.png',
  description: 'Back home page',
  width: 340,
  height: 225,
};

describe('NoResults Component', () => {
  it('should match snapshot for NoResults', () => {
    const { container } = render(<NoResults {...NoResultsProps} />);

    expect(container).toMatchSnapshot();
  });
});
