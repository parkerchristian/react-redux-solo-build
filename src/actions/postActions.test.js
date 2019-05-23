import { createPost, POST } from './postActions';

describe('POST ACTIONS', () => {
  it('creates a post', () => {
    expect(createPost('title', 'body')).toEqual({
      type: POST,
      payload: { title: 'title', body: 'body' }
    });
  });
});
