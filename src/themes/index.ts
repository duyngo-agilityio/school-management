import { extendTheme } from '@chakra-ui/react';

// Themes
import { Avatar, Button, CustomFlex, Input, Text } from './components';
import { fonts, fontSizes, radius } from './typographies';
import { colors } from './colors';

const theme = extendTheme({
  colors,
  fonts,
  fontSizes,
  radii: radius,
  components: {
    Button,
    Input,
    Text,
    Avatar,
    CustomFlex,
  },
});

export default theme;
