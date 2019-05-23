import { POST, DELETE, UPDATE, DELETE_ONE } from '../actions/postActions';

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
    case DELETE_ONE:
      return { ...state, posts: [{
        ...state.posts.slice(0, action.payload),
        ...state.posts.slice(action.payload + 1) }
      ] };
      // case UPDATE:
      //   return { ...state, posts: [
      //     ...state.slice(0, action.payload.i),

      //     { ...state[action.payload.i],
      //       body: action.payload.body },

    //     ...state.slice(action.payload.i + 1)
    //   ] };
    default:
      return state;
  }
}
