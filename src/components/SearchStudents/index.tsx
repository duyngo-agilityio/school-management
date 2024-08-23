'use client';

// Libs
import { useCallback, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

// Components
import SearchInput from '../SearchInput';

// Constants
import { INPUT_PLACEHOLDER } from '@/constants';

const SearchStudents = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const searchValue = useMemo(
    () => searchParams.get('q') || '',
    [searchParams],
  );

  const handleSearchValue = useCallback(
    useDebouncedCallback((value: string) => {
      const params = new URLSearchParams(searchParams);

      if (value) {
        params.set('q', value);
      } else {
        params.delete('q');
      }

      replace(`${pathname}?${params.toString()}`);
    }, 500),
    [pathname, replace, searchParams],
  );

  return (
    <div>
      <SearchInput
        defaultValue={searchValue}
        placeholder={INPUT_PLACEHOLDER.STUDENT}
        onSearch={handleSearchValue}
      />
    </div>
  );
};

export default SearchStudents;
