const ACCESS_TOKEN = "ACCESS_TOKEN";

export const setToken = (token) => localStorage.setItem(ACCESS_TOKEN, token);
export const setInfo = (id, firstName, email, cart) => {
  localStorage.setItem("id", id);
  localStorage.setItem("firstName", firstName);
  localStorage.setItem("email", email);
  localStorage.setItem("cart", cart);
};
export const getToken = () => localStorage.getItem(ACCESS_TOKEN);
export const getEmail = () => localStorage.getItem("email");
export const getFirstName = () => localStorage.getItem("firstName");
export const getId = () => localStorage.getItem("id");

export const setCartState = (cart) => localStorage.setItem("cart", cart);
export const getCartState = () => localStorage.getItem("cart");

export const removeToken = () => {
  localStorage.clear();
};
