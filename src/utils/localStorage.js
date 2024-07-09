const ACCESS_TOKEN = "ACCESS_TOKEN";

export const setToken = (token) => localStorage.setItem(ACCESS_TOKEN, token);
export const setInfo = (id, firstName, email) => {
  localStorage.setItem("id", id);
  localStorage.setItem("firstName", firstName);
  localStorage.setItem("email", email);
};
export const getToken = () => localStorage.getItem(ACCESS_TOKEN);
export const getEmail = () => localStorage.getItem("email");
export const getFirstName = () => localStorage.getItem("firstName");
export const getId = () => localStorage.getItem("id");
export const removeToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem("id");
  localStorage.removeItem("firstName");
  localStorage.removeItem("email");
};
