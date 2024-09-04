import { MOCK_STUDENTS } from '@/mocks';
import InfoStudent from '..';
import { render, waitFor } from '@testing-library/react';
import { getStudentById } from '@/services';

jest.mock('next/navigation', () => ({
  notFound: jest.fn().mockReturnValue('not found'),
}));

jest.mock('@/services', () => ({
  getStudentById: jest.fn(),
}));

describe('InfoStudent', () => {
  it('match snapshot', async () => {
    (getStudentById as jest.Mock).mockResolvedValue(MOCK_STUDENTS[1]);

    const { container } = render(
      await InfoStudent({
        params: {
          id: '7',
        },
      }),
    );

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });

  it('match snapshot with not found', async () => {
    (getStudentById as jest.Mock).mockResolvedValue({});

    const { container } = render(
      await InfoStudent({
        params: {
          id: '7',
        },
      }),
    );

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
