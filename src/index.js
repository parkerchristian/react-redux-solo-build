import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// import { createStore } from 'redux';
// import reducer from './reducer/index';
// import { createComment } from './actions/commentActions';
// import { createPost } from './actions/postActions';

// const store = createStore(reducer);

// store.dispatch(createPost('TITLE', 'Body'));
// store.dispatch(createPost('Post 2', 'Second body'));
// store.dispatch(createComment(1, 'comment'));
// store.dispatch(createComment(1, 'comment on'));
// store.dispatch(createComment(1, 'comment on post'));
// store.dispatch(createComment(2, 'comment on second post'));
// store.dispatch(createComment(2, 'comment two on second post'));

// console.log('COMMENT', store.getState());
