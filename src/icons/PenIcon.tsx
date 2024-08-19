interface PenIconProps {
  width?: string;
  height?: string;
  stroke?: string;
}

const PenIcon = ({
  width = '16',
  height = '16',
  stroke = 'white',
}: PenIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M5.5499 15.5999L9.7499 19.1999M12.7499 22.1999H22.3499M4.9499 15.5999L16.7813 3.35533C18.0552 2.08143 20.1206 2.08143 21.3945 3.35533C22.6684 4.62923 22.6684 6.69463 21.3945 7.96853L9.1499 19.7999L3.1499 21.5999L4.9499 15.5999Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PenIcon;
