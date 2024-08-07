import { extendTheme } from '@chakra-ui/react';

// Themes
import { Avatar, Button, Input, Text, Profile } from './components';
import { fonts, fontSizes, radius } from './typographies';
import { colors } from './colors';
import { CustomFlex } from './components/customFlex';

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
    Profile,
    CustomFlex,
  },
});

export default theme;
