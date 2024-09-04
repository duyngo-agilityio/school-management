import { render } from '@testing-library/react';
import TableStudent from '@/components/TableStudent';
import { IStudent } from '@/types';
import { useParams } from 'next/navigation';

const mockData: IStudent[] = [
  {
    id: '1',
    fullName: 'John Doe',
    avatar: '/path/to/avatar1.jpg',
    email: 'johndoe@example.com',
    className: '10A',
    gender: 1,
    age: 23,
  },
  {
    id: '2',
    fullName: 'Jane Smith',
    avatar: '/path/to/avatar2.jpg',
    email: 'janesmith@example.com',
    className: '11B',
    gender: 0,
    age: 20,
  },
];

jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
  useRouter: () => ({ push: jest.fn() }),
}));

describe('TableStudent Component', () => {
  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ id: '1' }); // Set a mock id
  });

  it('should render correctly and match snapshot', () => {
    const { container } = render(<TableStudent data={mockData} />);

    expect(container).toMatchSnapshot();
  });
});
