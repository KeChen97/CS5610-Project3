//Ke Chen
// Great idea having the encryption logic in a seperate file.
const bcrypt = require("bcrypt");
const saltRounds = 10;

function MyEncrypt() {
  const myEncrypt = {};

  myEncrypt.hashPassword = async function (pw) {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(pw, salt);
    return hash;
  };

  myEncrypt.compare = async function (pw, hashedPw) {
    const result = await bcrypt.compare(pw, hashedPw);
    return result;
  };

  return myEncrypt;
}

module.exports = MyEncrypt();
