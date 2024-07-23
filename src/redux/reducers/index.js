const initialState = {
  products: [],
  cart: [],
  totalAmount: 0,
  filteredProducts: [],
  filters: {
    category: [],
    priceUnder: [],
    sortOrder: null,
  },
  address: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const itemId = parseInt(action.id);
      const itemInCart = state.cart.find((ele) => ele.id === itemId);

      if (itemInCart) {
        const updatedCart = state.cart.map((ele) =>
          ele.id === itemId ? { ...ele, cartCount: ele.cartCount + 1 } : ele
        );
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        const item = state.products.find((ele) => ele.id === itemId);
        item.cartCount++;
        return {
          ...state,
          cart: [...state.cart, item],
        };
      }
    }

    case "REMOVE_FROM_CART": {
      const itemID = parseInt(action.id);
      const item = state.cart.find((ele) => ele.id === itemID);
      const newCartCount = item.cartCount === 1 ? 0 : item.cartCount - 1;

      if (newCartCount === 0) {
        //remove the item from cart
        const updatedCart = state.cart.filter((ele) => ele.id !== itemID);
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        //update cart with new cart count
        const updatedCart = state.cart.map((ele) =>
          ele.id === itemID ? { ...ele, cartCount: ele.cartCount - 1 } : ele
        );
        return {
          ...state,
          cart: updatedCart,
        };
      }
    }

    case "SET_PRODUCTS":
      const updatedState = action.payload.map((ele) => ({
        ...ele,
        cartCount: 0,
      }));

      return {
        ...state,
        products: updatedState,
      };

    case "SET_TOTAL_AMOUNT":
      return {
        ...state,
        totalAmount: action.totalAmount,
      };

    case "SET_CATEGORY_FILTER":
      const updatedCategories = state.filters.category.includes(action.category)
        ? state.filters.category.filter((ele) => ele !== action.category)
        : [...state.filters.category, action.category];

      return {
        ...state,
        filters: {
          ...state.filters,
          category: updatedCategories,
        },
        filteredProducts: applyFilters(state.products, {
          ...state.filters,
          category: updatedCategories,
        }),
      };

    case "SET_PRICE_FILTER":
      const updatedPriceList = state.filters.priceUnder.includes(action.price)
        ? state.filters.priceUnder.filter((ele) => ele !== action.price)
        : [...state.filters.priceUnder, action.price];
      return {
        ...state,
        filters: {
          ...state.filters,
          priceUnder: updatedPriceList,
        },
        filteredProducts: applyFilters(state.products, {
          ...state.filters,
          priceUnder: updatedPriceList,
        }),
      };

    case "SET_SORT_ORDER_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          sortOrder: action.sortOrder,
        },
        filteredProducts: applyFilters(state.products, {
          ...state.filters,
          sortOrder: action.sortOrder,
        }),
      };

    case "SET_ADDRESS":
      return {
        ...state,
        address: action.address,
      };

    default:
      return state;
  }
};

const applyFilters = (products, filters) => {
  let filtered = [...products];

  if (filters.category.length) {
    filtered = products.filter((ele) =>
      filters.category.includes(ele.category)
    );
  }

  if (filters.priceUnder.length) {
    filtered = filtered.filter((product) =>
      filters.priceUnder.some((price) => product.price <= price)
    );
  }

  //150 [100,300,500]-->

  if (filters.sortOrder) {
    filtered.sort((a, b) =>
      filters.sortOrder === "ascending" ? a.price - b.price : b.price - a.price
    );
  }

  return filtered;
};

export default reducer;
