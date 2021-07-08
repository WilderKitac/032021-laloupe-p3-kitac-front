export const initialState = {
  //   csrfToken: null,
  //   user: null,
  //   jwt: null,
  cart: [],
  prodDetail: null,
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case 'ADD_CART': {
      const cartToUpdate = [...state.cart];
      const itemIndex = cartToUpdate.findIndex((item) => {
        return (
          item.id === action.item.id &&
          item.selectedSize === action.item.selectedSize &&
          item.selectedMaterial === action.item.selectedMaterial &&
          item.selectedSupplies === action.item.selectedSupplies
        );
      });
      if (itemIndex > -1) {
        cartToUpdate[itemIndex].quantity++;
      } else {
        cartToUpdate.push({ ...action.item, quantity: 1 });
      }
      return { ...state, cart: cartToUpdate };
    }
    case 'SET_PRODDETAIL': {
      return { ...state, prodDetail: action.prodDetail };
    }
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
    default: {
      return state;
    }
  }
};

export default reducer;
