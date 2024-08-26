import { fireEvent, render, screen } from '@testing-library/react';

// Components
import Modal from '..';

const mockOnClose = jest.fn();

const ModalProps = {
  isOpen: false,
  title: '',
  children: <>Form</>,
  onClose: mockOnClose,
};

const ModalComponent = (overrideProps = {}) =>
  render(<Modal {...ModalProps} {...overrideProps} />);

describe('Modal Component', () => {
  it('should match snapshot for Modal', () => {
    const { container } = ModalComponent();

    expect(container).toMatchSnapshot();
  });

  it('should render the modal when isOpen is true', () => {
    render(
      <Modal title="Test Title" onClose={() => {}}>
        <div>Test Content</div>
      </Modal>,
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', () => {
    const handleClose = jest.fn();

    render(
      <Modal title="Test Title" onClose={handleClose}>
        <div>Test Content</div>
      </Modal>,
    );

    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
