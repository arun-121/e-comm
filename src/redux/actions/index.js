import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_PRODUCTS,
  SET_TOTAL_AMOUNT,
  SET_CATEGORY_FILTER,
  SET_PRICE_FILTER,
  SET_SORT_ORDER_FILTER,
  SET_ADDRESS,
  SET_THEME,
} from "./actionTypes";

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id: id,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id: id,
  };
};

export const setProducts = (data) => {
  return {
    type: SET_PRODUCTS,
    payload: data,
  };
};

export const setTotalAmount = (amount) => {
  return {
    type: SET_TOTAL_AMOUNT,
    totalAmount: amount,
  };
};

export const setCategoryFilter = (category) => {
  return {
    type: SET_CATEGORY_FILTER,
    category: category,
  };
};

export const setPriceFilter = (price) => {
  return {
    type: SET_PRICE_FILTER,
    price: price,
  };
};

export const setSortedFilter = (sortOrder) => {
  return {
    type: SET_SORT_ORDER_FILTER,
    sortOrder: sortOrder,
  };
};

export const SetAddress = (address) => {
  return {
    type: SET_ADDRESS,
    address: address,
  };
};

export const setTheme = (theme) => {
  return {
    type: SET_THEME,
    theme: theme,
  };
};
