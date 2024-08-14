'use client';

import { ChangeEvent, memo } from 'react';
import isEqual from 'react-fast-compare';

// Components
import { Select, SelectProps } from '@chakra-ui/react';

export interface Option {
  value: string;
  label: string;
}

interface DropdownProps extends SelectProps {
  options: Option[];
  placeholder?: string;
  width?: string;
  onChangeValue: (value: string) => void;
}

const Dropdown = ({
  options,
  placeholder = '',
  width,
  onChangeValue,
  value,
  ...rest
}: DropdownProps) => {
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeValue(e.target.value);
  };

  return (
    <Select
      w={width}
      placeholder={placeholder}
      onChange={handleSelect}
      value={value}
      {...rest}
    >
      {options.map(({ value = '', label = '' }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Select>
  );
};

export default memo(Dropdown, isEqual);
