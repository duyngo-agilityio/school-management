import { render } from '@testing-library/react';

// Components
import Profile, { TCustomFlex } from '..';

const ProfileProps = {
  title: 'John',
  variant: 'xs' as TCustomFlex,
  src: '',
  id: '123',
  subTitle: 'Math Teacher',
};

const ProfileComponent = (overrideProps = {}) =>
  render(<Profile {...ProfileProps} {...overrideProps} />);

describe('Profile Component', () => {
  it('should match snapshot for Profile', () => {
    const { container } = ProfileComponent();

    expect(container).toMatchSnapshot();
  });

  it('renders match with props variant is md', () => {
    const { container } = ProfileComponent({ variant: 'md' });

    expect(container).toMatchSnapshot();
  });
});
