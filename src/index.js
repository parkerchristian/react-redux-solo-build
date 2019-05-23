import { createStore } from 'redux';
import reducer from './reducer/postReducer';
import { createPost, deletePost } from './actions/postActions';

const store = createStore(reducer);

store.dispatch(createPost({
  title: 'Sup',
  body: 'We are Words and words and stuff'
}));
console.log('created POST', store.getState());

store.dispatch(createPost({
  title: 'Again',
  body: '.......body......'
}));
console.log('created POST 2...', store.getState());

store.dispatch(deletePost());
console.log('post DELETE', store.getState());
