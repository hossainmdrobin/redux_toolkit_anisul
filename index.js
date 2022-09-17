const { createStore, combineReducers } = require("redux");

const GET_PRODUCTS = "GETPRODUCTS";
const ADD_PRODUCTS = "ADDPRODUCTS";

const GET_CART_ITEMS = "GET_CART_ITEM";
const ADD_CART_ITEMS = "ADD_CART_ITEM";

// PRODUCT states
const initalProductState = {
  products: ["suger", "salt"],
  numberofproducts: 2,
};
//CART STATE
const initialCartState = {
  cart: ["suger"],
  numberofcart: 1,
};

//PRODUCTS ACTION FUNCTION
const addProduct = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};

const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

//CART ACTION FUNCTION
const addCart = (cart) => {
  return {
    type: ADD_CART_ITEMS,
    payload: cart,
  };
};

const getCart = () => {
  return {
    type: GET_CART_ITEMS,
  };
};

//product Reducer
const productReducer = (state = initalProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload],
        numberofproducts: state.numberofproducts + 1,
      };
    default:
      return {
        ...state,
      };
  }
};

//product Reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };
    case ADD_CART_ITEMS:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        numberofcart: state.numberofcart + 1,
      };
    default:
      return {
        ...state,
      };
  }
};
//combining Reducers
const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});
//creating store
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addProduct('sssss'));

// store.dispatch(getCart());
// store.dispatch(addCart("some"));
