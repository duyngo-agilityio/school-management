import { fireEvent, render } from '@testing-library/react';

// Components
import SearchInput from '..';

// Constants
import { INPUT_PLACEHOLDER } from '@/constants';

const mockOnSearch = jest.fn();
const mockOnClick = jest.fn();

const SearchInputProps = {
  placeholder: INPUT_PLACEHOLDER.TEACHER,
  defaultValue: '',
  onSearch: mockOnSearch,
  onClick: mockOnClick,
  disableInput: false,
};

const SearchInputComponent = () =>
  render(<SearchInput {...SearchInputProps} />);

describe('SearchInput component', () => {
  it('should match snapshot for SearchInput', () => {
    const { container } = SearchInputComponent();

    expect(container).toMatchSnapshot();
  });

  it('calls onSearch when input value changes', () => {
    const { getByPlaceholderText } = SearchInputComponent();

    const inputElement = getByPlaceholderText(INPUT_PLACEHOLDER.TEACHER);

    fireEvent.change(inputElement, { target: { value: 'math' } });

    expect(mockOnSearch).toHaveBeenCalledWith('math');
  });
});
