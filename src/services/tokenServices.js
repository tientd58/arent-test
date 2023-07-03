const getLocalRefreshToken = () => {
  const user = JSON.parse(localStorage.getItem("user") || '{}');
  return user?.refreshToken;
}

const getLocalAccessToken = () => {
  const user = JSON.parse(localStorage.getItem("user") || '{}');
  return user?.accessToken;
}

const updateLocalAccessToken = (token) => {
  let user = JSON.parse(localStorage.getItem("user"));
  user.accessToken = token;
  localStorage.setItem("user", JSON.stringify(user));
}

const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
}

const removeUser = () => {
  localStorage.removeItem("user");
}

const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  return userStr ? JSON.parse(userStr) : null;
};

const tokenServices = {
  setUser,
  removeUser,
  getCurrentUser,
  getLocalAccessToken,
  getLocalRefreshToken,
  updateLocalAccessToken,
};

export default tokenServices;
