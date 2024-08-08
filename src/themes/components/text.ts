import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  defaultProps: {
    size: 'lg',
  },
  variants: {
    primary: {
      color: 'textPrimary',
      fontWeight: 'semiBold',
    },
    secondary: {
      color: 'textSecondary',
      fontWeight: 'semiBold',
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
    },
    // Custom for Profile
    profile_xs: {
      fontSize: '12px',
      fontWeight: 'medium',
    },
    profile_sm: {
      color: 'textSecondary',
    },
    profile_md: {
      color: 'textTitle',
    },
    profile_lg: {
      color: 'textTitle',
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
