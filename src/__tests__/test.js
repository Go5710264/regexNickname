import Validator from '../js/Validator';

test('use of non-latin letters', () => {
  expect(() => { new Validator('xDakЫ-11x').validateUsername(); }).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _, цифры (0-9), никнейм не должен начинаться и заканчиваться с цифр, символов _ и -');
});

test('error when using four digits in a row', () => {
  expect(() => { new Validator('xDak1111x').validateUsername(); }).toThrow('Недопустимо использовать более трех цифр подряд');
});

test('validation was successful', () => {
  expect(new Validator('xDak1x').validateUsername()).toBe('Корректный никнейм');
});
