'use client';

import { useRef, useState } from 'react';

// Icons
import { TrashIcon, UploadIcon } from '@/icons';

// Components
import { Box, Flex, IconButton, Image, Input, Text } from '@chakra-ui/react';

export interface IUploadImageProps {
  name: string;
  alt: string;
  title?: string;
  height?: string;
  width?: string;
  boxHeightImage?: string;
  src?: string;
  onChange?: () => void;
  onRemove?: () => void;
}

const UploadImage = ({
  title,
  height,
  width,
  alt,
  boxHeightImage,
  src,
  onChange,
  onRemove,
  name,
}: IUploadImageProps) => {
  const [previewImage, setPreviewImage] = useState(src);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleRemoveImage = () => {
    onRemove?.();
    setPreviewImage('');
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleUploadFile = () => {
    onChange?.();
    setPreviewImage('url');
  };

  return (
    <>
      {!previewImage ? (
        <Flex
          w={width}
          h={height}
          flexDirection="column"
          border="1px solid"
          borderColor="borderCatSkill"
          borderRadius="md"
          alignItems="center"
        >
          <Flex
            h="full"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            onClick={handleButtonClick}
          >
            <Box>
              <Text variant="primary" size="md" color="primaryColor">
                {title}
              </Text>
            </Box>
            <Input
              name="upload"
              type="file"
              hidden
              accept="image/png, image/webp, image/jpeg"
              onChange={handleUploadFile}
              ref={inputRef}
            />
          </Flex>
        </Flex>
      ) : (
        <Box
          borderRadius="md"
          border="1px solid"
          borderColor="borderCatSkill"
          px={2}
          pos="relative"
          w={width}
          h={height}
        >
          <Box h={boxHeightImage} py={1}>
            <Image
              w="full"
              h="full"
              objectFit="contain"
              src={previewImage}
              alt={alt}
            />
          </Box>

          <Flex pos="absolute" top={50} right={50} mt={5} mr="25px">
            <Box onClick={handleButtonClick}>
              <Input
                name="upload"
                type="file"
                hidden
                accept="image/png, image/webp, image/jpeg"
                onChange={handleUploadFile}
                ref={inputRef}
              />
              <IconButton
                aria-label="re-upload-icon"
                background="none"
                icon={<UploadIcon />}
              />
            </Box>
            <IconButton
              background="none"
              aria-label="delete-icon"
              icon={<TrashIcon stroke="black" height="36px" width="36px" />}
              onClick={handleRemoveImage}
            />
          </Flex>
        </Box>
      )}
    </>
  );
};

export default UploadImage;
