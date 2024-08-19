'use client';

// Libs
import { ChangeEvent, useState } from 'react';

// Components
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

// Icons
import { EyeHiddenIcon, EyeShowIcon } from '@/icons';

interface PasswordInputProps {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = ({ value, onChange }: PasswordInputProps) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        data-testid="password-input"
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        value={value}
        onChange={onChange}
      />
      <InputRightElement width="4.5rem">
        <Button variant="icon" onClick={handleClick}>
          {show ? <EyeHiddenIcon /> : <EyeShowIcon />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
