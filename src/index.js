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
