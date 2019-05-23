import { createPost, POST } from '../actions/postActions';
import reducer from '../actions/postActions';

describe('Post REDUCER', () => {
  it('handle the create post action', () => {
    const newState = reducer([], createPost({ title: 'title', body: 'body' }));

    expect(newState).toEqual({
      type: POST,
      payload: { title: 'title', body: 'body' }
    });
  });
});
