import { fireEvent, render } from '@testing-library/react';

// Components
import Dropdown from '..';

// Constants
import { INPUT_PLACEHOLDER, OPTIONS_SUBJECT } from '@/constants';

const DropdownProps = {
  options: OPTIONS_SUBJECT,
  placeholder: INPUT_PLACEHOLDER.TEACHER,
  width: '',
  onChangeValue: jest.fn(),
};

const DropdownComponent = () => render(<Dropdown {...DropdownProps} />);

describe('Dropdown components', () => {
  it('should match snapshot for Dropdown', () => {
    const { container } = DropdownComponent();

    expect(container).toMatchSnapshot();
  });

  it('calls onChangeValue when an option is selected', () => {
    const { getByRole } = DropdownComponent();

    fireEvent.change(getByRole('combobox'), { target: { value: 'math' } });

    expect(DropdownProps.onChangeValue).toHaveBeenCalled();
  });
});
