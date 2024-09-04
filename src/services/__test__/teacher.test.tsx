import { MOCK_TEACHERS } from '@/mocks';
import { apiClient, getTeacherById, getTeacherList } from '@/services';

jest.mock('@/services/api');
jest.mock('next/cache');

describe('Teacher service tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('getTeacherList will return value correctly', async () => {
    jest.spyOn(apiClient, 'get').mockResolvedValue(MOCK_TEACHERS);

    expect(await getTeacherList({ q: '6' })).toStrictEqual(MOCK_TEACHERS);
  });

  it('getTeacherById will return value correctly', async () => {
    const mockTeacherRes = MOCK_TEACHERS[0];
    jest.spyOn(apiClient, 'get').mockResolvedValue(mockTeacherRes);

    expect(await getTeacherById('6')).toStrictEqual(mockTeacherRes);
  });
});
