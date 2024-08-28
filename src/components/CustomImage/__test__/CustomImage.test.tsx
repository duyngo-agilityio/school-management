import { render, screen } from '@testing-library/react';

// Components
import CustomImage from '..';

// Constants
import { NO_IMAGE, NOT_FOUND_IMAGE } from '@/constants';

describe('CustomImage Component', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <CustomImage width={50} height={50} src="/logo.png" alt="Test Image" />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should display NO_IMAGE as alt text when src is NOT_FOUND_IMAGE', () => {
    render(
      <CustomImage
        width={50}
        height={50}
        src={NOT_FOUND_IMAGE}
        alt="Test Image"
      />,
    );

    const image = screen.getByAltText('No Image') as HTMLImageElement;
    expect(image.alt).toBe(NO_IMAGE);
  });
});
