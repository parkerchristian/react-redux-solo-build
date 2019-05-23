export const COMMENT = 'COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const createComment = (postID, comment) => ({
  type: COMMENT,
  payload: { postID, comment }
});

export const deleteComment = (postID, commentID) => ({
  type: DELETE_COMMENT,
  payload: { postID, commentID }
});
