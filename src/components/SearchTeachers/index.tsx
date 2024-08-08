'use client';

// Components
import SearchInput from '../SearchInput';

// Constants
import { INPUT_PLACEHOLDER } from '@/constants';

const SearchTeachers = () => {
  // TODO: Will be implemented later
  const handleSearchValue = () => {};

  // TODO: Will be implemented later
  const handleDeleteSearchValue = () => {};

  return (
    <SearchInput
      defaultValue=""
      placeholder={INPUT_PLACEHOLDER.TEACHER}
      onSearch={handleSearchValue}
      onClick={handleDeleteSearchValue}
    />
  );
};

export default SearchTeachers;
