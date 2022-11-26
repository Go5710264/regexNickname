import './style.css';

class Validator {
    constructor(username) {
      this.username = username;
    }
    
    validateUsername() {
      // let verifiedUsername = this.username.match(/^\D+[\w-]+\D$/g);
      // let verifiedUsername = this.username.match(/^[^-^_]\D+[\w-]+(?:[-_][a-zA-Z0-9]+)*$/g);
      let verifiedUsername = this.username.match(/^[a-zA-Z\d][\w\p{Pd}][a-zA-Z\d]$/ugi)
      console.log(verifiedUsername)
      // verifiedUsername = verifiedUsername[0].split('');
    // \b\d{3} - числа в начале и в конце
    // \d{3} - более 3х цифр подряд
    // [^\b-_] - не должно начинаться с -_
    // ^[^(\-|\_)] - начало строки не - или _
  
      \b[a-zA-Z](?:[-_][a-zA-Z0-9]+)*\w*
  
  1Dak1
  xDak1x
  -Dak1-
  _Dak1_
  xDak-1x
  xDak_1x
  xDak111x
  
        
      
    console.log(verifiedUsername)
      if (this.username.length === verifiedUsername.length) {
        return this.username.match(/^\D+[\w-]+\D$/g);  
      } else {
        let error = new Error;
        console.log(error)
      }
    }
  }
  
  const newUser = new Validator ('Da-k');
  console.log(newUser.validateUsername())
  
  // /^([a-zA-Z][^-^_])[\w-]([a-zA-Z][^-^_])$/
  
  // let str = 'аDak1';
  // let reg = /^\W/g;
  // console.log(reg.test(str))
  // console.log(str.match(reg))