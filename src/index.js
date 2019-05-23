import { createStore } from 'redux';

const initialState = {
  posts: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'POST':
      return { ...state, posts: [...state.posts, { title: action.payload.title,
        body: action.payload.body }
      ] };
    case 'DELETE':
      return { ...state, posts: null };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({
  type: 'POST',
  payload: { title: 'Hey! SUCKA', body: 'Wordy words words' }
});
console.log('created POST', store.getState());

store.dispatch({
  type: 'DELETE',
  payload: null
});
console.log('post DELETE', store.getState());
