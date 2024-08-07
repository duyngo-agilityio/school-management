// Libs
import { usePathname } from 'next/navigation';

// Components
import NavItem from './Item';

// Constants
import { LINK_ITEMS } from '@/constants';

const Navbar = () => {
  const pathname = usePathname();

  return LINK_ITEMS.map(({ name, icon, href }) => (
    <NavItem key={name} icon={icon} href={href} isActive={href === pathname}>
      {name}
    </NavItem>
  ));
};

export default Navbar;
