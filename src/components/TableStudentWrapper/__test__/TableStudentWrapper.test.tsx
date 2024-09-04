import { MOCK_STUDENTS } from '@/mocks';
import { getStudentList } from '@/services';
import TableStudentWrapper from '..';
import { render } from '@testing-library/react';

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

describe('TableStudentWrapper component', () => {
  it('should match snapshot', async () => {
    (getStudentList as jest.Mock).mockResolvedValue(MOCK_STUDENTS);

    const { container } = render(
      await TableStudentWrapper({
        searchParams: { q: '12' },
      }),
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with data empty', async () => {
    (getStudentList as jest.Mock).mockResolvedValue([]);

    const { container } = render(
      await TableStudentWrapper({
        searchParams: { q: '12' },
      }),
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with not found', async () => {
    (getStudentList as jest.Mock).mockResolvedValue(undefined);

    const { container } = render(
      await TableStudentWrapper({
        searchParams: { q: '12' },
      }),
    );

    expect(container).toMatchSnapshot();
  });
});
