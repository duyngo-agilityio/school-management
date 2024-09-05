'use client';

import { ChangeEvent, memo, useEffect, useRef } from 'react';

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
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (defaultValue === '' && ref.current) {
      ref.current.value = '';
    }
  }, [defaultValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    onSearch(value);
  };

  const handleClearInput = () => {
    if (ref.current) {
      ref.current.value = '';
    }

    onSearch('');
  };

  return (
    <InputGroup width="auto">
      <InputLeftElement style={{ cursor: 'pointer' }}>
        <SearchIcon />
      </InputLeftElement>
      <Input
        ref={ref}
        bgColor="backgroundWhiteHint"
        pl={10}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={handleChange}
        disabled={disableInput}
      />
      {defaultValue && (
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
