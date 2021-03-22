/* eslint import/prefer-default-export: off */
export const pxToInt = (value: string): number =>
  Number(value.replace('px', ''));
