export const POST = 'POST';
export const DELETE = 'DELETE';
export const DELETE_ONE = 'DELETE_ONE';
export const UPDATE = 'UPDATE';

export const createPost = (postContent) => ({
  type: POST,
  payload: postContent
});

export const deletePost = () => ({
  type: DELETE,
});
export const deleteOnePost = (id) => ({
  type: DELETE_ONE,
  payload: { id }
});

// export const updatePost = (i, body) => ({
//   type: UPDATE,
//   payload: { i, body }
// });
