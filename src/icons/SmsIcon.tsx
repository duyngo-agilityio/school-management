interface SmsIconProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
}

const SmsIcon = ({
  width = '24',
  height = '24',
  stroke = '#A7A7A7',
}: SmsIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      d="M21.25 25.625H8.75C5 25.625 2.5 23.75 2.5 19.375V10.625C2.5 6.25 5 4.375 8.75 4.375H21.25C25 4.375 27.5 6.25 27.5 10.625V19.375C27.5 23.75 25 25.625 21.25 25.625Z"
      stroke={stroke}
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.25 11.25L17.3375 14.375C16.05 15.4 13.9375 15.4 12.65 14.375L8.75 11.25"
      stroke={stroke}
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default SmsIcon;