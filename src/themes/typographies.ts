import { Kumbh_Sans } from 'next/font/google';

const kumbh_sans = Kumbh_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const fonts = {
  heading: kumbh_sans.style.fontFamily,
  body: kumbh_sans.style.fontFamily,
};

export const fontSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '24px',
  xl: '28px',
  '2xl': '32px',
  '3xl': '36px',
};

export const radius = {
  md: '4px',
  lg: '8px',
};

export const lineHeights = {
  1: '15px',
  2: '17px',
  3: '20px',
  4: '30px',
  5: '35px',
  6: '40px',
  7: '45px',
};
