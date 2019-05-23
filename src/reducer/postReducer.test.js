import reducer from './postReducer';
import { createPost } from '../actions/postActions';

describe('Post REDUCER', () => {
  it('handle the create post action', () => {
    const newState = reducer([], createPost('TITLE', 'Body'));

    expect(newState).toEqual([
      { title: 'TITLE', body: 'Body' }
    ]);
  });
});
