// eslint-disable-next-line import/prefer-default-export
export const stripUnit = (value: string): number =>
  Number(value.replace(/\D/g, ''));
