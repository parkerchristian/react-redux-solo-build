export const POST = 'POST';
export const DELETE = 'DELETE';

export const createPost = (postContent) => ({
  type: POST,
  payload: postContent
});

export const deletePost = () => ({
  type: DELETE,
});
