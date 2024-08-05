import { extendTheme } from '@chakra-ui/react';

// Themes
import { Button, Input, Text } from './components';
import { fonts, fontSizes, radius } from './typographies';
import { colors } from './colors';

const theme = extendTheme({
  colors,
  fonts,
  fontSizes,
  radii: radius,
  component: {
    Button,
    Input,
    Text,
  },
});

export default theme;
