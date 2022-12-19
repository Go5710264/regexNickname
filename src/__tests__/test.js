import Validator from '../js/Validator';

test('use of non-latin letters', () => {
  expect(() => { new Validator('xDakЫ-11x').validateUsername(); }).toThrow('Необходимо использовать только цифры, английский алфавит, -, _');
});

test('error when using four digits in a row', () => {
  expect(() => { new Validator('xDak1111x').validateUsername(); }).toThrow('Необходимо использовать не более трех цифр подряд');
});

test('error when using non-letters at the beginning of a word', () => {
  expect(() => { new Validator('1Dak1x').validateUsername(); }).toThrow('Начало и окончание никнейма должны содержать только буквы');
});

test('validation was successful', () => {
  expect(new Validator('xDak1x').validateUsername()).toBe('validation xDak1x completed successfully');
});
