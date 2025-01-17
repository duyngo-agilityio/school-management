import React from 'react';
import type { Preview } from '@storybook/react';

// Themes
import configThemes from '../src/themes';
import { ChakraProvider } from '../src/provider/ChakraProvider';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chakra: {
      theme: configThemes,
    },
  },
  decorators: (Story) => (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  ),
  tags: ['autodocs'],
};

export default preview;
