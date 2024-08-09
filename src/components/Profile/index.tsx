'use client';

// Components
import {
  Avatar,
  Flex,
  FlexProps,
  Text,
  useStyleConfig,
} from '@chakra-ui/react';

type TCustomFlex = 'xs' | 'sm' | 'md' | 'lg';

interface ProfileProps {
  title: string;
  variant: TCustomFlex;
  src?: string;
  id?: string;
  subTitle?: string;
}

interface CustomFlexProps extends FlexProps {
  variant?: TCustomFlex;
}

const CustomFlex = ({ variant, ...props }: CustomFlexProps) => {
  const styles = useStyleConfig('CustomFlex', { variant });

  return <Flex __css={styles} {...props} />;
};

const Profile = ({ id, title, src, subTitle, variant }: ProfileProps) => {
  const variantText = `profile_${variant}`;
  const ml = variant === 'xs' ? '8px' : '';

  const renderAvatar = id ? (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap="12px"
    >
      <Text variant="tertiary">{id}</Text>
      <Avatar src={src} size={variant} />
    </Flex>
  ) : (
    <Avatar src={src} size={variant} />
  );

  const renderTitle = subTitle ? (
    <Flex flexDir="column" alignItems="center" gap="4px">
      <Text variant={variantText}>{title}</Text>
      <Text variant="subTitle">{subTitle}</Text>
    </Flex>
  ) : (
    <Text variant={variantText} ml={ml}>
      {title}
    </Text>
  );

  return (
    <CustomFlex variant={variant}>
      {renderAvatar}
      {renderTitle}
    </CustomFlex>
  );
};

export default Profile;
