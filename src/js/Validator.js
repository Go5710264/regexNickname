export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    const firstRule = /\d{4,}/.test(this.username);
    const secondRule = /[^\w-]/.test(this.username);
    const thirdRule = /^[a-zA-Z]+[\w-]+[a-zA-Z]+$/.test(this.username);

    if (firstRule) {
      throw new Error('Необходимо использовать не более трех цифр подряд');
    }
    if (secondRule) {
      throw new Error('Необходимо использовать только цифры, английский алфавит, -, _');
    }
    if (!thirdRule) {
      throw new Error('Начало и окончание никнейма должны содержать только буквы');
    }
    return `validation ${this.username} completed successfully`;
  }
}
