var CryptoJS = require('crypto-js');
var decrypt = (ciphertext) => {
  try {
    var bytes = CryptoJS.AES.decrypt(ciphertext, 'a2xhcgAAAAAAAAAA');
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    return '';
  }
};
async function decriptionFun(p) {
  var password = await decrypt(p);
  console.log(password);
}
decriptionFun('U2FsdGVkX1+6knSUnCy2YXQS7d8S7p8emyj/3OZgMUE='); //password
