const validation = (inputs) => {
  const errors = {};
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPass = new RegExp(
    "^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{6,10}$"
  );

  if (!regexEmail.test(inputs.username)) {
    errors.username = "Debe ser un correo electrónico valido";
  }
  if (!inputs.username) {
    errors.username = "add your username";
  }
  if (inputs.username.length > 35) {
    errors.username = "Max length 35";
  }
  if (!regexPass.test(inputs.password)) {
    errors.password = "add pass 6-10 characters and numbers";
  }
  return errors;
};

export default validation;
