import { createStore } from 'redux';
import {
  ADD_DRINK,
  REMOVE_DRINK,
  ADD_CHIPS,
  REMOVE_CHIPS,
  ADD_SANDWICH,
  REMOVE_SANDWICH,
  removeChips,
  removeDrink,
  removeSandwich,
  addChips,
  addDrink,
  addSandwich,
  ADD_FULL_BOAT,
  addFullBoat,
  REMOVE_FULL_BOAT,
  removeFullBoat
} from './actions/lunchActions';

const initialState = {
  drink: null,
  chips: null,
  sandwich: null
};

function reducer(state = initialState, action) {
  
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: action.payload };
    case REMOVE_DRINK:
      return { ...state, drink: null };
    case ADD_CHIPS:
      return { ...state, chips: action.payload };
    case REMOVE_CHIPS:
      return { ...state, chips: null };
    case ADD_SANDWICH:
      return { ...state, sandwich: action.payload };
    case REMOVE_SANDWICH:
      return { ...state, sandwich: null };
    case ADD_FULL_BOAT:
      return { ...state, 
        drink: action.payload.drink, 
        chips: action.payload.chips, 
        sandwich: action.payload.sandwich };
    case REMOVE_FULL_BOAT:
      return { ...state,
        drink: null, 
        chips: null, 
        sandwich: null };
    default:
      return state;
  }
}

const store = createStore(reducer);

// ADD + REMOVE DRINKS
store.dispatch(addDrink('COKE'));
console.log('add drink', store.getState());
store.dispatch(removeDrink());
console.log('remove drink', store.getState());

// ADD + REMOVE CHIPS
store.dispatch(addChips('LAYS'));
console.log('add chips', store.getState());
store.dispatch(removeChips());
console.log('remove chips', store.getState());

// ADD + REMOVE SANDWICH
store.dispatch(addSandwich('SUB'));
console.log('add sandwich', store.getState());
store.dispatch(removeSandwich());
console.log('remove sandwich', store.getState());

// ADD + REMOVE FULL BOAT
store.dispatch(addFullBoat({ 
  drink: 'pepsi', 
  chips: 'lays',
  sandwich: 'sub' }));
console.log('add full boat', store.getState());
store.dispatch(removeFullBoat());
console.log('remove full boat', store.getState());
