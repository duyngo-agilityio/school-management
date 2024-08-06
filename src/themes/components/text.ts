import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  variants: {
    primary: {
      color: 'textPrimary',
      fontSize: 'md',
      fontWeight: 'bold',
    },
    tertiary: {
      color: 'textTertiary',
      fontSize: 'md',
      fontWeight: 'bold',
    },
    title: {
      color: 'textTitle',
      fontSize: 'md',
      fontWeight: 'bold',
    },
    subTitle: {
      color: 'textSubTitle',
      fontSize: 'sm',
      fontWeight: 'bold',
    },
    light: {
      color: 'textLight',
      fontSize: 'sm',
      fontWeight: 'semiBold',
    },
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
