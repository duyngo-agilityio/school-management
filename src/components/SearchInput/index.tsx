'use client';

import { ChangeEvent } from 'react';

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
  onClick: (value: string) => void;
}

const SearchInput = ({
  placeholder,
  defaultValue,
  onSearch,
  onClick,
}: SearchInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const handleClick = () => {
    onClick('');
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
        defaultValue={defaultValue}
        onChange={handleChange}
      />
      <InputRightElement>
        <TiDeleteOutline style={{ cursor: 'pointer' }} onClick={handleClick} />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchInput;
