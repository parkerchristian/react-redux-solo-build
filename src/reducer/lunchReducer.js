import {
  ADD_DRINK,
  REMOVE_DRINK,
  ADD_CHIPS,
  REMOVE_CHIPS,
  ADD_SANDWICH,
  REMOVE_SANDWICH,
  ADD_FULL_BOAT,
  REMOVE_FULL_BOAT,
} from '../actions/lunchActions';

const initialState = {
  drink: null,
  chips: null,
  sandwich: null
};

export default function reducer(state = initialState, action) {
  
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
