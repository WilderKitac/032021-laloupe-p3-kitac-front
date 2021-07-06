export const initialState = {
  //   csrfToken: null,
  //   user: null,
  //   jwt: null,
  cart: [],
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    // case 'SET_USER': {
    //   return { ...state, user: action.user };
    // }
    // case 'RESET_USER': {
    //   return { ...state, user: null };
    // }
    // case 'SET_CSRF': {
    //   return { ...state, csrfToken: action.csrf };
    // }
    // case 'RESET_CSRF': {
    //   return { ...state, csrfToken: null };
    // }
    // case 'SET_JWT': {
    //   return { ...state, jwt: action.jwt };
    // }
    // case 'RESET_JWT': {
    //   return { ...state, jwt: null };
    // }
    case 'SET_CART': {
      const cartToUpdate = [...state.cart];
      cartToUpdate.push(action.cart);
      return { ...state, cart: cartToUpdate };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
