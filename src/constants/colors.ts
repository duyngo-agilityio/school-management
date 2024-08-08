const bluePallet = {
  zodiac: '#152259',
  koamaru: '#13296A',
  havelock: '#509CDB',
  solitude: '#EBF6FF',
  linkWater: '#EFF3FA',
};

const grayPallet = {
  cod: '#1A1A1A',
  tundora: '#424242',
  emperor: '#4F4F4F',
  ash: '#8A8A8A',
  slate: '#A7A7A7',
  aluminum: '#BDBDBD',
};

const whitePallet = {
  seashell: '#F1F1F1',
  snow: '#FCFAFA',
  pure: '#FFFFFF',
};

export const customColors = {
  ...bluePallet,
  ...whitePallet,
  ...grayPallet,
} as const;
