import { Flex } from '@chakra-ui/react';

interface IconProps {
  icon: JSX.Element;
  width?: string;
  height?: string;
  bg?: string;
}

const Icon = ({
  icon,
  width = '36px',
  height = '36px',
  bg = 'backgroundLinkWater',
  ...rest
}: IconProps) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    w={width}
    h={height}
    bg={bg}
    borderRadius="lg"
    {...rest}
  >
    {icon}
  </Flex>
);

export default Icon;
