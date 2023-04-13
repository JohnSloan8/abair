const emailRe =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const validateEmail = (email: string) => {
  if (String(email).toLowerCase().match(emailRe) !== null) {
    return true;
  }
  return false;
};

export default validateEmail;
