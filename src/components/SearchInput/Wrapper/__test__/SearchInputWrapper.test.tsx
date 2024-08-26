import { render } from '@testing-library/react';
import SearchInputWrapper from '..';

// Constants
import { INPUT_PLACEHOLDER } from '@/constants';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      replace: jest.fn(),
    };
  },
  useSearchParams() {
    return new URLSearchParams({
      q: 'a',
    });
  },
  usePathname() {
    return '/';
  },
}));

describe('SearchInputWrapper Component', () => {
  it('should match snapshot for SearchInputWrapper', () => {
    const { container } = render(
      <SearchInputWrapper placeholder={INPUT_PLACEHOLDER.STUDENT} />,
    );

    expect(container).toMatchSnapshot();
  });
});
