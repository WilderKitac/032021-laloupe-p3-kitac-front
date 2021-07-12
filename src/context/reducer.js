export const initialState = {
  user: null,
  jwt: null,
  role: null,
  prodId: null,
  cart: [],
  prodDetail: null,
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case 'SET_USER': {
      return { ...state, user: action.user };
    }
    case 'RESET_USER': {
      return { ...state, user: null };
    }
    case 'SET_JWT': {
      return { ...state, jwt: action.jwt };
    }
    case 'RESET_JWT': {
      return { ...state, jwt: null };
    }
    case 'SET_ROLE': {
      return { ...state, role: action.role };
    }
    case 'RESET_ROLE': {
      return { ...state, role: null };
    }
    case 'SET_PRODID': {
      return { ...state, prodId: action.prodId };
    }
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
    default: {
      return state;
    }
  }
};

export default reducer;
