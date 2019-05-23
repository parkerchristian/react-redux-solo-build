import { createStore } from 'redux';
import reducer from './reducer/postReducer';
import { createPost, deletePost, updatePost, deleteOnePost } from './actions/postActions';

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
store.dispatch(deleteOnePost(1));
console.log('post DELETE_ONE', store.getState());

// store.dispatch(updatePost({ title: 'DUH', body: 'DUH' }));
// console.log('post UPDATE', store.getState());
