import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    fontSize: 'sm',
    borderRadius: 'md',
  },

  variants: {
    primary: { 
      color: 'textLight',
      bgColor: 'backgroundBlueHaveLock',
    },

    secondary: {
      bgColor: 'backgroundSeashell',
      color: 'textPrimary',
    },
  },
});
