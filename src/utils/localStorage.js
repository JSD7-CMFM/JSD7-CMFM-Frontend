const decodeJWT = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

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

export const getIsAdmin = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);

  if (!token) {
    return false;
  }

  try {
    const decodedToken = decodeJWT(token);
    console.log(decodedToken);
    return decodedToken && decodedToken.isAdmin === true;
  } catch (error) {
    console.error("Invalid token:", error);
    return false;
  }
};

export const setCartState = (cart) => localStorage.setItem("cart", cart);
export const getCartState = () => localStorage.getItem("cart");

export const removeToken = () => {
  localStorage.clear();
};
