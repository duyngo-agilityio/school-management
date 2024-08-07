'use client';

// Components
import SearchInput from '../SearchInput';

// Constants
import { INPUT_PLACEHOLDER } from '@/constants';

const SearchStudents = () => {
  // TODO: Will be implemented later
  const handleSearchValue = () => {};

  // TODO: Will be implemented later
  const handleDeleteSearchValue = () => {};

  return (
    <div>
      <SearchInput
        defaultValue=""
        placeholder={INPUT_PLACEHOLDER.STUDENT}
        onSearch={handleSearchValue}
        onClick={handleDeleteSearchValue}
      />
    </div>
  );
};

export default SearchStudents;
