const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_COUNTER_BY_VALUE = "INCREMENT_COUNTER_BY_VALUE";
const ADD_USER = "ADD_USER";

//state -count:0
const initialState = {
    count: 0,
    user: ['anisul']
};

//action- increment, decremnet, reset

const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};
const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};
const resetCounterAction = () => {
  return {
    type: RESET,
  };
};

const incrementCounterByValue = (value) => {
  return {
    type: INCREMENT_COUNTER_BY_VALUE,
    payload: value,
  };
};

const addUser = (value) => {
  return {
    type: ADD_USER,
    payload: value,
  };
};

//reducer

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    case INCREMENT_COUNTER_BY_VALUE:
      return {
        ...state,
        count: action.payload + state.count
          };
      case ADD_USER:
      return {
        ...state,
        user: [...state.user, action.payload]
      };
    default:
      return state;
  }
};

//store

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// dispatch action
store.dispatch(incrementAction());
store.dispatch(resetCounterAction());
store.dispatch(decrementAction());
store.dispatch(incrementCounterByValue(50))
store.dispatch(addUser('robin'));
