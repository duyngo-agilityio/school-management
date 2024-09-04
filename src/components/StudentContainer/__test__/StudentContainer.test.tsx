import { MOCK_STUDENTS } from '@/mocks';
import { render } from '@testing-library/react';
import StudentContainer from '..';
import { getStudentList } from '@/services';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn().mockImplementation(() => ({
    get: () => 1,
  })),
  notFound: jest.fn(),
  useParams: jest.fn().mockReturnValue({ id: '1' }),
  usePathname: jest.fn().mockReturnValue('/'),
  useRouter: () => ({ push: jest.fn() }),
}));

jest.mock('@/services', () => ({
  getStudentList: jest.fn(),
}));

describe('StudentContainer component', () => {
  it('should match snapshot', async () => {
    (getStudentList as jest.Mock).mockResolvedValue(MOCK_STUDENTS);

    const { container } = render(
      await StudentContainer({
        searchParams: { q: '123' },
        children: <div>Content</div>,
      }),
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with data return empty', async () => {
    (getStudentList as jest.Mock).mockResolvedValue([]);
    const { container } = render(
      await StudentContainer({
        searchParams: { q: '123' },
        children: <div>Content</div>,
      }),
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with not found', async () => {
    (getStudentList as jest.Mock).mockResolvedValue(undefined);
    const { container } = render(
      await StudentContainer({
        searchParams: { q: '123' },
        children: <div>Content</div>,
      }),
    );

    expect(container).toMatchSnapshot();
  });
});
