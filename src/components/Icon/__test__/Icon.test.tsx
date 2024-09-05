import { render } from '@testing-library/react';

// Components
import Icon from '..';

// Icons
import { StudentIcon } from '@/icons';

const IconProps = {
  icon: <StudentIcon />,
  width: '24',
  height: '24',
  bg: 'red',
};

const IconComponent = () => render(<Icon {...IconProps} />);

describe('Icon components', () => {
  it('should match snapshot for Icon', () => {
    const { container } = IconComponent();

    expect(container).toMatchSnapshot();
  });
});
