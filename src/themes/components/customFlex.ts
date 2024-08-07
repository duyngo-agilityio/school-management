import { defineStyleConfig } from '@chakra-ui/react';

export const CustomFlex = defineStyleConfig({
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  variants: {
    xs: {
      flexDirection: 'row',
    },
    sm: {
      pt: '24px',
      pb: '40px',
      gap: '20px',
    },
    md: {
      gap: '20px',
    },
    lg: {
      gap: '50px',
    },
  },
});
