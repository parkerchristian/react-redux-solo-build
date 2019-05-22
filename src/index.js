import { createStore } from 'redux';

const initialState = {
  drink: null,
  chips: null,
  sandwich: null
};

function reducer(state = initialState, action) {
  
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: action.payload };
    case 'REMOVE_DRINK':
      return { ...state, drink: null };
    case 'ADD_CHIPS':
      return { ...state, chips: action.payload };
    case 'REMOVE_CHIPS':
      return { ...state, chips: null };
    case 'ADD_SANDWICH':
      return { ...state, sandwich: action.payload };
    case 'REMOVE_SANDWICH':
      return { ...state, sandwich: null };
    case 'ADD_FULL_BOAT':
      return { ...state, 
        drink: action.payload.drink, 
        chips: action.payload.chips, 
        sandwich: action.payload.sandwich };
    case 'REMOVE_FULL_BOAT':
      return { ...state,
        drink: null, 
        chips: null, 
        sandwich: null };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'pepsi'
});
console.log('add drink', store.getState());

store.dispatch({
  type: 'REMOVE_DRINK',
  payload: null
});
console.log('remove drink', store.getState());

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'lays'
});
console.log('add chips', store.getState());

store.dispatch({
  type: 'REMOVE_CHIPS',
  payload: null
});
console.log('remove drink', store.getState());

store.dispatch({
  type: 'ADD_FULL_BOAT',
  payload: 
    { drink: 'pepsi', chips: 'lays', sandwich: 'sub' }
});
console.log('add full boat', store.getState());

store.dispatch({
  type: 'REMOVE_FULL_BOAT',
  payload: 
  { drink: null, chips: null, sandwich: null }
});
console.log('remove full boat', store.getState());
