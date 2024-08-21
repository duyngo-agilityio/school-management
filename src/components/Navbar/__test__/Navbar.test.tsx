import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';

// Components
import Navbar, { LINK_ITEMS } from '..';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Navbar Component', () => {
  it('renders all NavItem components', () => {
    const mockPathname = LINK_ITEMS[0].href;
    (usePathname as jest.Mock).mockReturnValue(mockPathname);

    render(<Navbar />);

    LINK_ITEMS.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('highlights the active NavItem based on pathname', () => {
    const mockPathname = LINK_ITEMS[1].href;
    (usePathname as jest.Mock).mockReturnValue(mockPathname);

    render(<Navbar />);

    const activeNavItem = screen.getByText(LINK_ITEMS[1].name);
    expect(activeNavItem).toHaveStyle('color: textSecondary');
    expect(activeNavItem.closest('div')).toHaveStyle(
      'background-color: backgroundBlueHaveLock',
    );
  });
});
