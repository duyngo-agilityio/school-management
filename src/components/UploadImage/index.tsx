'use client';

import { useRef, useState } from 'react';

// Icons
import { TrashIcon, UploadIcon } from '@/icons';

// Components
import {
  Box,
  Flex,
  IconButton,
  Image,
  Input,
  Spinner,
  Text,
  useToast,
} from '@chakra-ui/react';

// Hooks
import { useUpload } from '@/hooks';

export interface IUploadImageProps {
  alt: string;
  title?: string;
  height?: string;
  width?: string;
  boxHeightImage?: string;
  src?: string;
  onChange?: (url: string) => void;
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
}: IUploadImageProps) => {
  const [previewImage, setPreviewImage] = useState(src);

  const toast = useToast();

  const { handleUploadImage, isLoading } = useUpload();

  const inputRef = useRef<HTMLInputElement>(null);

  // Handle change upload image
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const dataImage = await handleUploadImage(file);

      if (dataImage.error) {
        toast({
          title: 'Upload image fail',
          status: 'error',
        });
        return;
      }

      return { url: dataImage.image };
    }
  };

  const handleRemoveImage = () => {
    onRemove?.();
    setPreviewImage('');
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleUploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = await handleChange(e);

    if (image) {
      const { url } = image;
      onChange?.(url);
      setPreviewImage(url);
    }
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
          {isLoading ? (
            <Flex justifyContent="center" alignItems="center" h="inherit">
              <Spinner label="Uploading..." />
            </Flex>
          ) : (
            <Flex
              h="full"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              onClick={handleButtonClick}
            >
              <Flex alignItems="center" cursor="pointer">
                <UploadIcon />
                <Text variant="primary" size="md" color="primaryColor">
                  {title}
                </Text>
              </Flex>
              <Input
                name="upload"
                type="file"
                hidden
                accept="image/png, image/webp, image/jpeg"
                onChange={handleUploadFile}
                ref={inputRef}
                data-testid="upload"
              />
            </Flex>
          )}
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
          <Flex pos="absolute" top={1} right={0}>
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
                _hover="none"
                icon={<UploadIcon width="20" height="20" />}
              />
            </Box>
            <IconButton
              background="none"
              _hover="none"
              aria-label="delete-icon"
              icon={<TrashIcon stroke="black" width="20" height="20" />}
              onClick={handleRemoveImage}
            />
          </Flex>
        </Box>
      )}
    </>
  );
};

export default UploadImage;
