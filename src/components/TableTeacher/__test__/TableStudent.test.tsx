import { render } from '@testing-library/react';
import { ITeacher } from '@/types';
import { useParams } from 'next/navigation';

// Components
import TableTeacher from '..';

const mockData: ITeacher[] = [
  {
    id: '1',
    fullName: 'John Doe',
    avatar: '/path/to/avatar1.jpg',
    email: 'johndoe@example.com',
    className: '10A',
    gender: 1,
    age: 33,
    subject: 'Physical',
  },
  {
    id: '2',
    fullName: 'Jane Smith',
    avatar: '/path/to/avatar2.jpg',
    email: 'janesmith@example.com',
    className: '11B',
    gender: 0,
    age: 40,
    subject: 'Math',
  },
];

jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
  useRouter: () => ({ push: jest.fn() }),
}));

describe('TableTeacher Component', () => {
  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ id: '1' }); // Set a mock id
  });

  it('should render correctly and match snapshot', () => {
    const { container } = render(<TableTeacher data={mockData} />);

    expect(container).toMatchSnapshot();
  });
});
