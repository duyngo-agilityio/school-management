import { defineStyleConfig } from '@chakra-ui/react';

export const Avatar = defineStyleConfig({
  sizes: {
    sm: {
      container: {
        width: '24px',
        height: '24px',
      },
    },
    md: {
      container: {
        width: '65px',
        height: '65px',
      },
    },
    lg: {
      container: {
        width: '180px',
        height: '180px',
      },
    },
    xl: {
      container: {
        width: '280px',
        height: '280px',
      },
    },
  },
});
