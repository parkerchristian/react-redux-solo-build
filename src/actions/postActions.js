export const POST = 'POST';
export const DELETE = 'DELETE';
export const DELETE_ONE = 'DELETE_ONE';
export const UPDATE = 'UPDATE';

export const createPost = (title, body) => ({
  type: POST,
  payload: { title, body }
});

export const deletePost = () => ({
  type: DELETE,
});
export const deleteOnePost = (id) => ({
  type: DELETE_ONE,
  payload: id
});

export const updatePost = (id, body) => ({
  type: UPDATE,
  payload: { id, body }
});
