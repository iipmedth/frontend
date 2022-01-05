export default validateRegister = (values) => {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }
};
