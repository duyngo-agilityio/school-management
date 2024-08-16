'use client';

// Components
import SearchInput from '../SearchInput';

// Constants
import { INPUT_PLACEHOLDER } from '@/constants';

interface SearchTeachersProps {
  fullName: string;
  disableInput?: boolean;
}

const SearchTeachers = ({ disableInput, fullName }: SearchTeachersProps) => {
  // TODO: Will be implemented later
  const handleSearchValue = () => {};

  // TODO: Will be implemented later
  const handleDeleteSearchValue = () => {};

  return (
    <SearchInput
      defaultValue={fullName}
      placeholder={INPUT_PLACEHOLDER.TEACHER}
      onSearch={handleSearchValue}
      onClick={handleDeleteSearchValue}
      disableInput={disableInput}
    />
  );
};

export default SearchTeachers;
