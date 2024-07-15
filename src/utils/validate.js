export const checkValidatedata = (email, password) => {
  //   const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  //   if (!isNameValid) return "Enter Valid Name";
  if (!isEmailValid) return "Email not valid";
  if (!isPasswordValid) return "Password not valid";
};
