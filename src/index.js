import { createStore } from 'redux';
import reducer from './reducer/lunchReducer';
import {
  removeChips,
  removeDrink,
  removeSandwich,
  addChips,
  addDrink,
  addSandwich,
  addFullBoat,
  removeFullBoat
} from './actions/lunchActions';

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
