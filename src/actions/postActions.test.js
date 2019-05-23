import { createPost, POST } from './postActions';

describe('POST ACTIONS', () => {
  it('creates a post', () => {
    expect(createPost({ title: 'title', body: 'body' })).toEqual({
      type: POST,
      payload: { title: 'title', body: 'body' }
    });
  });
});
