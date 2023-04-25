// const passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[()"^@$!%*?&])[A-Za-z\d()"^@$!%*?&]{8,}$/;
const passwordRe = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;
const validatePassword = (password: string) => {
  if (String(password).match(passwordRe) !== null) {
    return false;
  }
  return true;
};

export default validatePassword;
