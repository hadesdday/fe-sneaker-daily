import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  cartItems: [],
  isLoading: false,
  error: null,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.ADD_TO_CART_START:
      return {
        ...state,
        isLoading: true,
      };

    case CART_ACTION_TYPES.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cartItems: [...state.cartItems, payload.item],
        isLoading: false,
      };

    case CART_ACTION_TYPES.ADD_TO_CART_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };

    case CART_ACTION_TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.productId !== payload.productId
        ),
      };
    case CART_ACTION_TYPES.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
