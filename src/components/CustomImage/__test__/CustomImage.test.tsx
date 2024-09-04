import { render } from '@testing-library/react';

// Components
import CustomImage from '..';

// Constants
import { BLUR_DATA_URL, NO_IMAGE, NOT_FOUND_IMAGE } from '@/constants';

describe('CustomImage Component', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <CustomImage
        width={50}
        height={50}
        src="/logo.png"
        alt="Test Image"
        blurDataURL={BLUR_DATA_URL}
        placeholder="blur"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should display NO_IMAGE as alt text when src is NOT_FOUND_IMAGE', () => {
    const { getByAltText } = render(
      <CustomImage
        width={50}
        height={50}
        src={NOT_FOUND_IMAGE}
        alt="Test Image"
        blurDataURL={BLUR_DATA_URL}
        placeholder="blur"
      />,
    );

    const image = getByAltText('No Image') as HTMLImageElement;
    expect(image.alt).toBe(NO_IMAGE);
  });
});
