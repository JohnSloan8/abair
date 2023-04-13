const passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const validatePassword = (password: string) => {
  if (String(password).match(passwordRe) !== null) {
    return true;
  }
  return false;
};

export default validatePassword;
