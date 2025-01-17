import React from 'react';

interface HomeIconProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
}

const HomeIcon = ({
  width = '16',
  height = '16',
  stroke = 'white',
}: HomeIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M14.6666 7.49978C14.6666 6.69312 14.1266 5.65978 13.4666 5.19978L9.34659 2.31312C8.41325 1.65978 6.91325 1.69312 6.01325 2.39312L2.41992 5.19312C1.81992 5.65978 1.33325 6.65312 1.33325 7.40645V12.3464C1.33325 13.8931 2.59325 15.1598 4.13992 15.1598H11.8599C13.4066 15.1598 14.6666 13.8931 14.6666 12.3531V10.2864"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 12.4932V10.4932"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default HomeIcon;
