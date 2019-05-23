import { createStore } from 'redux';
import reducer from './reducer/index';
import { createComment } from './actions/commentActions';
import { createPost } from './actions/postActions';

const store = createStore(reducer);

store.dispatch(createPost('TITLE', 'Body'));
store.dispatch(createComment(1, 'comment on post'));

console.log('COMMENT', store.getState());
