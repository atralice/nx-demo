import { v4 as uuidv4 } from 'uuid';

export const generateFileName = () => uuidv4();
export const generateSlug = () => uuidv4();

export const toFixed = (inputNumber: number, fixed: number): string => {
  const num = (inputNumber % 1 === 0) ? inputNumber + '.00' : inputNumber + '00';
  const re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
  const result = num.toString().match(re);
  if (!result) {
    console.warn(`toFixed error inputNumber: ${inputNumber}, result: ${result}`);
    return '0';
  }
  return result[0];
};

export const test = () => 'test';
