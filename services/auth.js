const register = (params) => {
  let user = {
    Email: params.email,
    firstName: params.fn,
    lastName: params.ln,
    dateOfBirth: params.dob,
  };
  return user;
};
const login = (email) => {
  if (email == "test@test.com") {
    return { status: 200, message: "ok authentication" };
  }
  return { status: 401, message: "Bad request" };
};
module.exports = {
  register,
  login,
};
