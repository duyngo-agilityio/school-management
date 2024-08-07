import { defineStyleConfig } from '@chakra-ui/react';

export const Avatar = defineStyleConfig({
  sizes: {
    xs: {
      container: {
        width: '24px',
        height: '24px',
      },
    },
    sm: {
      container: {
        width: '65px',
        height: '65px',
      },
    },
    md: {
      container: {
        width: '180px',
        height: '180px',
      },
    },
    lg: {
      container: {
        width: '280px',
        height: '280px',
      },
    },
  },
});
