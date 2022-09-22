const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

const url = "https://jsonplaceholder.typicode.com/todos"

const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";

//states
const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null
}

//actions 
const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST
  }
}

const getTodosFailed = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload:error
  };
};

const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos
  };
};

//reducer
const todoReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos:action.payload,
        isLoading: false,
      };
    case GET_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error:action.payload
      };
  }

}

//async action creator
const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());
    axios.get(url)
      .then(res => {
      const todos = res.data;
      const titles = todos.map(todo => todo.title);
      dispatch(getTodosSuccess(titles))
      })
      .catch(error => {
        const errorMessage = (error.message);
        dispatch(getTodosFailed(errorMessage))
    })
    
  }
}

//store
const store = createStore(todoReducer, applyMiddleware(thunk))

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(fetchData())