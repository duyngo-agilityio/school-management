'use client';

// Components
import {
  Avatar,
  Flex,
  PartsStyleInterpolation,
  Text,
  useMultiStyleConfig,
} from '@chakra-ui/react';

interface ProfileProps {
  title: string;
  variant: string;
  src: string;
  id?: string;
  subTitle?: string;
}

const Profile = ({
  id,
  title,
  src,
  subTitle,
  variant = 'fieldRow',
}: ProfileProps) => {
  const styles = useMultiStyleConfig('Profile', { variant });

  return (
    <Flex __css={styles.wrapper}>
      {id ? (
        <Flex flexDir="column" justify="center" alignItems="center" gap="12px">
          <Text variant="tertiary">{id}</Text>
          <Avatar src={src} {...(styles.avatar as PartsStyleInterpolation)} />
        </Flex>
      ) : (
        <Avatar src={src} {...(styles.avatar as PartsStyleInterpolation)} />
      )}
      {subTitle ? (
        <Flex flexDir="column" justify="center" gap="4px">
          <Text {...(styles.title as PartsStyleInterpolation)}>{title}</Text>
          <Text variant="subTitle">{subTitle}</Text>
        </Flex>
      ) : (
        <Text {...(styles.title as PartsStyleInterpolation)}>{title}</Text>
      )}
    </Flex>
  );
};

export default Profile;
