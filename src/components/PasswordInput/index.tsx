'use client';

// Libs
import { useState } from 'react';

// Components
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

// Icons
import { EyeHidden, EyeShow } from '@/icons';

const PasswordInput = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input pr="4.5rem" type={show ? 'text' : 'password'} />
      <InputRightElement width="4.5rem">
        <Button variant="icon" onClick={handleClick}>
          {show ? <EyeHidden /> : <EyeShow />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
