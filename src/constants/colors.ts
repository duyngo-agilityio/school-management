const bluePallet = {
  zodiac: '#152259',
  koamaru: '#13296A',
  havelock: '#1C5A8C',
  cornflower: '#3182ce',
  solitude: '#EBF6FF',
  catSkill: '#E2E8F0',
  linkWater: '#EFF3FA',
};

const grayPallet = {
  cod: '#1A1A1A',
  tundora: '#424242',
  emperor: '#4F4F4F',
  ash: '#8A8A8A',
  slate: '#595959',
  aluminum: '#BDBDBD',
};

const whitePallet = {
  seashell: '#F1F1F1',
  snow: '#FCFAFA',
  pure: '#FFFFFF',
};

const redPallet = {
  roman: '#DB5050',
};

const yellowPallet = {
  anzac: '#DBBD50',
};

export const customColors = {
  ...bluePallet,
  ...whitePallet,
  ...grayPallet,
  ...redPallet,
  ...yellowPallet,
} as const;
