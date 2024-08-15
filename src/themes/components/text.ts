import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  defaultProps: {
    size: 'lg',
  },
  variants: {
    primary: {
      color: 'textPrimary',
      fontWeight: 'regular',
    },
    secondary: {
      color: 'textSecondary',
      fontWeight: 'semibold',
    },
    tertiary: {
      color: 'textTertiary',
    },
    quaternary: {
      color: 'textDark',
      fontWeight: 'medium',
    },
    title: {
      color: 'textTitle',
      fontWeight: 'bold',
    },
    subTitle: {
      color: 'textSubTitle',
      fontSize: 'sm',
      fontWeight: 'medium',
    },
    // Custom for Profile
    profile_xs: {
      fontSize: 'xs',
      fontWeight: 'medium',
    },
    profile_sm: {
      fontSize: 'sm',
      color: 'textSecondary',
    },
    profile_md: {
      color: 'textTitle',
    },
    profile_lg: {
      color: 'textTitle',
      fontSize: 'md',
      fontWeight: 'bold',
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
