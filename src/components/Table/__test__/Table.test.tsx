import { render } from '@testing-library/react';
import { IFiledNameColumns, TDataType } from '@/types';

// Components
import Table from '..';

jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
}));

describe('Table Component', () => {
  const columns: IFiledNameColumns[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'fullName', headerName: 'Name' },
  ];

  const data: TDataType[] = [
    { id: '1', fullName: 'Item 1', age: 32, className: 'SS 1', gender: 1 },
    { id: '2', fullName: 'Item 2', age: 12, className: 'SS 2', gender: 1 },
    { id: '3', fullName: 'Item 3', age: 14, className: 'SS 3', gender: 1 },
  ];

  it('should match the snapshot', () => {
    const mockUseParams = jest.requireMock('next/navigation').useParams;
    mockUseParams.mockReturnValue({ id: '1' });

    const { container } = render(<Table columns={columns} data={data} />);
    expect(container).toMatchSnapshot();
  });

  it('should set bgColor to "backgroundBlueHaveLock" for the active row', () => {
    const mockUseParams = jest.requireMock('next/navigation').useParams;
    mockUseParams.mockReturnValue({ id: '1' });

    const { getByText } = render(<Table columns={columns} data={data} />);
    const activeRow = getByText('Item 1').closest('tr');

    expect(activeRow).toHaveStyle('background-color: backgroundBlueHaveLock');
  });

  it('should set bgColor to "backgroundSolitude" for an even index when not active', () => {
    const mockUseParams = jest.requireMock('next/navigation').useParams;
    mockUseParams.mockReturnValue({ id: '4' });

    const { getByText } = render(<Table columns={columns} data={data} />);
    const evenIndexRow = getByText('Item 2').closest('tr');

    expect(evenIndexRow).toHaveStyle('background-color: backgroundSolitude');
  });

  it('should set bgColor to an empty string for an odd index when not active', () => {
    const mockUseParams = jest.requireMock('next/navigation').useParams;
    mockUseParams.mockReturnValue({ id: '4' });

    const { getByText } = render(<Table columns={columns} data={data} />);
    const oddIndexRow = getByText('Item 3').closest('tr');

    expect(oddIndexRow).toHaveStyle('background-color: ');
  });
});
