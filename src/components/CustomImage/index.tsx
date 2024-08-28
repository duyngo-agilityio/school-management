'use client';

import Image, { ImageProps } from 'next/image';
import { memo, useState } from 'react';

// Constants
import { NO_IMAGE, NOT_FOUND_IMAGE } from '@/constants';

const CustomImage = ({ src, alt, blurDataURL, ...rest }: ImageProps) => {
  const [fallbackSrc, setFallbackSrc] = useState(false);

  const handleOnError = () => setFallbackSrc(true);
  const altImage = src !== NOT_FOUND_IMAGE && alt ? alt : NO_IMAGE;

  return (
    <Image
      src={fallbackSrc ? NOT_FOUND_IMAGE : src}
      alt={altImage}
      blurDataURL={blurDataURL}
      placeholder="blur"
      onError={handleOnError}
      {...rest}
    />
  );
};

export default memo(CustomImage);
