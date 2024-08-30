'use client';

// Libs
import { memo } from 'react';
import Image from 'next/image';

// Constants
import { BLUR_DATA_URL } from '@/constants';

// Components
import { Box, Flex, FlexProps, Text, useStyleConfig } from '@chakra-ui/react';

export type TCustomFlex = 'xs' | 'sm' | 'md' | 'lg';

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

const Profile = ({ id, title, src = '', subTitle, variant }: ProfileProps) => {
  const variantText = `profile_${variant}`;
  const ml = variant === 'xs' ? '8px' : '';

  const generateSize = (size: string) => {
    switch (size) {
      case 'xs':
        return {
          width: '24px',
          height: '24px',
        };

      case 'sm':
        return {
          width: '65px',
          height: '65px',
        };

      case 'md':
        return {
          width: '180px',
          height: '180px',
        };

      case 'lg':
        return {
          width: '280px',
          height: '280px',
        };
    }
  };

  const renderAvatar = id ? (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap="12px"
    >
      <Text variant="tertiary">{id}</Text>
      <Box pos="relative" style={generateSize(variant)}>
        <Image
          alt={title}
          src={src}
          fill
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          style={{ borderRadius: '50%' }}
        />
      </Box>
    </Flex>
  ) : (
    <Box pos="relative" style={generateSize(variant)}>
      <Image
        alt={title}
        src={src}
        fill
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        style={{ borderRadius: '50%' }}
      />
    </Box>
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

export default memo(Profile);
