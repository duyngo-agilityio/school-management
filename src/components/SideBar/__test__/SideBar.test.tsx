import { render } from '@testing-library/react';

// Components
import { SideBar } from '@/components';

describe('SideBar Component', () => {
  it('should match snapshot for SideBar', () => {
    const { container } = render(<SideBar />);

    expect(container).toMatchSnapshot();
  });
});
