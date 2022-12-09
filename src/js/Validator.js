export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    if (/((^[a-zA-Z]+?)([\w-]+)([a-zA-Z]+?$))/.test(this.username)) {
      if (/\d{4,}/.test(this.username)) {
        throw new Error('Недопустимо использовать более трех цифр подряд');
      } else {
        return 'Корректный никнейм';
      }
    } else {
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _, цифры (0-9), никнейм не должен начинаться и заканчиваться с цифр, символов _ и -');
    }
  }
}
