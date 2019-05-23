import { createStore } from 'redux';
import reducer from './reducer/postReducer';
import { createPost, deletePost, deleteOnePost, updatePost } from './actions/postActions';

const store = createStore(reducer);

store.dispatch(createPost(
  'Sup', 'We are Words and words and stuff'
));
store.dispatch(createPost(
  'Again', '.......body......'
));
console.log('POSTS', store.getState());

store.dispatch(updatePost(1, 'new updated body'));
console.log('UPDATE', store.getState());

store.dispatch(deleteOnePost(0));
console.log('DELETE_ONE', store.getState());
store.dispatch(deletePost());
console.log('DELETE', store.getState());
