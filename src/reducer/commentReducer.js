import { COMMENT } from '../actions/commentActions';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case COMMENT:
      return { ...state,
        [action.payload.postID]: [
          
        ] };
    default:
      return state;
  }
}
