import { POST, DELETE } from '../actions/postActions';

const initialState = {
  posts: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case POST:
      return { ...state, posts: [...state.posts, { 
        title: action.payload.title,
        body: action.payload.body }
      ] };
    case DELETE:
      return { ...state, posts: null };
    default:
      return state;
  }
}
