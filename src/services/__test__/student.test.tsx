import { MOCK_STUDENTS } from '@/mocks';
import { apiClient, getStudentById, getStudentList } from '@/services';

jest.mock('@/services/api');
jest.mock('next/cache');

describe('Student service tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('getStudentList will return value correctly', async () => {
    jest.spyOn(apiClient, 'get').mockResolvedValue(MOCK_STUDENTS);

    expect(await getStudentList({ q: '6' })).toStrictEqual(MOCK_STUDENTS);
  });

  it('getStudentById will return value correctly', async () => {
    const mockStudentRes = MOCK_STUDENTS[0];
    jest.spyOn(apiClient, 'get').mockResolvedValue(mockStudentRes);

    expect(await getStudentById('6')).toStrictEqual(mockStudentRes);
  });
});
