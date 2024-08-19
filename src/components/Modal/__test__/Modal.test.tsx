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
      <Modal isOpen={true} title="Test Title" onClose={() => {}}>
        <div>Test Content</div>
      </Modal>,
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should not render the modal when isOpen is false', () => {
    render(
      <Modal isOpen={false} title="Test Title" onClose={() => {}}>
        <div>Test Content</div>
      </Modal>,
    );

    expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', () => {
    const handleClose = jest.fn();

    render(
      <Modal isOpen={true} title="Test Title" onClose={handleClose}>
        <div>Test Content</div>
      </Modal>,
    );

    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
