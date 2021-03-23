export const defangIPaddr = (address: string): string => {
  return address.replace(/\./g, '[.]');
};
