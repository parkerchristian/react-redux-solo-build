import { POST, DELETE, DELETE_ONE, UPDATE } from '../actions/postActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case POST:
      return [...state, action.payload];
    case DELETE:
      return null;
    case DELETE_ONE:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    case UPDATE:
      return [
        ...state.slice(0, action.payload.id),
        {
          ...state[action.payload.id],
          body: action.payload.body
        },
        ...state.slice(action.payload.id + 1)
      ];

    default:
      return state;
  }
}
