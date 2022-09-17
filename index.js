const {createStore} = require('redux')

//DEFINING CONTTANT
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

//state
const initialCounterState = {
  count: 0,
};
const initialUsersState = {
  users: [{ name: "anisul Islam" }],
};

//action - objrect-type, payload

//INCREMENT COUNTER
const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounterAction = () => {
  return {
    type: DECREMENT,
  };
};

const addUser = () => {
  return {
    type: ADD_USER,
    payload: {
      name: "Shakil",
    },
  };
};

// create reducer for counter
const counterReducer = (state=initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state, 
        count: ++state.count,
      };
    case DECREMENT:
      return {
        ...state,
        count: --state.count,
      };
    default:
      return state;
  }
};

//create store
const store = createStore(counterReducer);

store.subscribe(()=> {
    console.log(store.getState());
})

//dispatch action
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
