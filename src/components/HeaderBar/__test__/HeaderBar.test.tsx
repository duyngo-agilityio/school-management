import { render } from '@testing-library/react';

// Components
import HeaderBar from '..';

const HeaderBarProps = {
  children: <>Content</>,
  width: '357px',
};

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      replace: jest.fn(),
    };
  },
}));

const HeaderBarComponent = () => render(<HeaderBar {...HeaderBarProps} />);

describe('HeaderBar Component', () => {
  it('should match snapshot for HeaderBar', () => {
    const { container } = HeaderBarComponent();

    expect(container).toMatchSnapshot();
  });

  it('applies the correct width to the Flex container', () => {
    const { container } = HeaderBarComponent();

    expect(container.firstChild).toHaveStyle('width: 357px');
  });
});
