import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const helpers = createMultiStyleConfigHelpers(['wrapper', 'avatar', 'title']);

export const Profile = helpers.defineMultiStyleConfig({
  baseStyle: {
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      borderBottom: '1px',
      borderBottomColor: 'borderSecondary',
      gap: '8px',
    },
    avatar: {
      size: 'sm',
    },
    title: {
      variant: 'primary',
    },
  },

  variants: {
    fieldRow: {
      title: {
        fontSize: 'xs',
        fontWeight: 'medium',
      },
    },
    sm: {
      wrapper: {
        flexDirection: 'column',
        pt: '24px',
        pb: '40px',
        background: 'backgroundPrimary',
        gap: '20px',
      },
      avatar: { size: 'md' },
      title: {
        variant: 'light',
      },
    },
    md: {
      wrapper: { flexDirection: 'column', gap: '20px' },
      avatar: { size: 'lg' },
      title: {
        variant: 'title',
      },
    },
    lg: {
      wrapper: { flexDirection: 'column', gap: '50px' },
      avatar: { size: 'xl' },
      title: {
        variant: 'title',
      },
    },
  },
  // The default variant value
  defaultProps: {
    variant: 'fieldRow',
  },
});
