'use client';

// Libs
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { useDebouncedCallback } from 'use-debounce';

// Components
import SearchInput from '../SearchInput';

// Constants
import { INPUT_PLACEHOLDER } from '@/constants';

interface SearchTeachersProps {
  fullName: string;
  disableInput?: boolean;
}

const SearchTeachers = ({ disableInput }: SearchTeachersProps) => {
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
    <SearchInput
      defaultValue={searchValue}
      placeholder={INPUT_PLACEHOLDER.TEACHER}
      onSearch={handleSearchValue}
      disableInput={disableInput}
    />
  );
};

export default SearchTeachers;
