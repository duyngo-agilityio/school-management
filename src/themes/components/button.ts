import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    fontSize: '12px',
    borderRadius: 'md',
  },

  variants: {
    primary: {
      color: 'textSecondary',
      bgColor: 'backgroundBlueHaveLock',
    },
    secondary: {
      bgColor: 'backgroundSeashell',
      color: 'textPrimary',
    },
    danger: {
      bgColor: 'backgroundRoman',
      color: 'textSecondary',
      fontSize: 'xs',
    },
    warning: {
      bgColor: 'backgroundAnzac',
      color: 'textSecondary',
      fontSize: 'xs',
    },
  },
});
