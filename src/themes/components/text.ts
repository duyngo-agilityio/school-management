import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  baseStyle: {
    color: 'textPrimary',
  },

  sizes: {
    xs: {
      fontSize: 'xs',
      lineHeight: 1,
    },
    sm: {
      fontSize: 'sm',
      lineHeight: 2,
    },
    md: {
      fontSize: 'md',
      lineHeight: 3,
    },
    lg: {
      fontSize: 'lg',
      lineHeight: 4,
    },
    xl: {
      fontSize: 'xl',
      lineHeight: 5,
    },
    '2xl': {
      fontSize: '2xl',
      lineHeight: 6,
    },
    '3xl': {
      fontSize: '3xl',
      lineHeight: 7,
    },
  },
});
