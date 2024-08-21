import { fireEvent, render } from '@testing-library/react';
import PasswordInput from '..';

const mockOnChange = jest.fn();

const PasswordInputProps = {
  value: 'Abc@123',
  onChange: mockOnChange,
};

const PasswordInputComponent = () =>
  render(<PasswordInput {...PasswordInputProps} />);

describe('PasswordInput Component', () => {
  it('should match snapshot for PasswordInput', () => {
    const { container } = PasswordInputComponent();

    expect(container).toMatchSnapshot();
  });

  it('toggles the visibility of the password when the button is clicked', () => {
    const { getByRole, container } = PasswordInputComponent();

    const inputElement = container.querySelector('input');
    const buttonElement = getByRole('button');

    expect(inputElement).toHaveAttribute('type', 'password');

    fireEvent.click(buttonElement);
    expect(inputElement).toHaveAttribute('type', 'text');

    fireEvent.click(buttonElement);
    expect(inputElement).toHaveAttribute('type', 'password');
  });
});
