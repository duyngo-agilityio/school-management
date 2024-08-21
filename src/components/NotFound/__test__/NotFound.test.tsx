import { render } from '@testing-library/react';

// Components
import NotFound from '..';

const NotFoundProps = {
  title: 'Page Not Found',
  src: '',
  description: 'Back home page',
  width: 340,
  height: 225,
};

describe('NotFound Component', () => {
  it('should match snapshot for NotFound', () => {
    const { container } = render(<NotFound {...NotFoundProps} />);

    expect(container).toMatchSnapshot();
  });
});
