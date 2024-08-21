import { render } from '@testing-library/react';

// Components
import NavItem from '..';

// Icons
import { HomeIcon } from '@/icons';

const NavItemProps = {
  icon: <HomeIcon />,
  href: '',
  isActive: false,
  children: <>Dashboard</>,
};

const NavItemComponent = (overrideProps = {}) => {
  const props = { ...NavItemProps, ...overrideProps };

  return render(<NavItem {...props} />);
};

describe('NavItem Component', () => {
  it('should match snapshot for NavItem', () => {
    const { container } = NavItemComponent();

    expect(container).toMatchSnapshot();
  });

  it('should render with isActive prop as true', () => {
    const { container } = NavItemComponent({ isActive: true });
    expect(container).toMatchSnapshot();
  });
});
