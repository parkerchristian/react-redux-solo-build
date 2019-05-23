import { COMMENT, DELETE_COMMENT } from '../actions/commentActions';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case COMMENT:
      return { ...state,
        [action.payload.postID]: [
          ...(state[action.payload.postID] || []),
          action.payload.comment
        ] };
    case DELETE_COMMENT:
      return {
        ...state,
        [action.payload.postID]: [
          ...state[action.payload.postID].slice(0, action.payload.commentID),
          ...state[action.payload.postID].slice(action.payload.commentID + 1),
        ]
      };
    default:
      return state;
  }
}
