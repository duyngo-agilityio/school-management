'use client';

import { ChangeEvent, memo, useState } from 'react';

// Icons
import { SearchIcon } from '@/icons';
import { TiDeleteOutline } from 'react-icons/ti';

// Components
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';

interface SearchInputProps {
  placeholder: string;
  defaultValue: string;
  onSearch: (value: string) => void;
  disableInput?: boolean;
}

const SearchInput = ({
  placeholder,
  defaultValue,
  onSearch,
  disableInput = false,
}: SearchInputProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    onSearch(value);
    setValue(value);
  };

  const handleClearInput = () => {
    setValue('');
    onSearch('');
  };

  return (
    <InputGroup width="auto">
      <InputLeftElement style={{ cursor: 'pointer' }}>
        <SearchIcon />
      </InputLeftElement>
      <Input
        bgColor="backgroundWhiteHint"
        pl={10}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disableInput}
      />
      {value && (
        <InputRightElement>
          <TiDeleteOutline
            style={{ cursor: 'pointer' }}
            onClick={handleClearInput}
          />
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default memo(SearchInput);
