import React from 'react';
import PropTypes from 'prop-types';
import CreateComment from '../../containers/CreateComment';
import CommentsByPostID from '../../containers/CommentsByPostID';

function PostDetail({ post }) {
  const paragraph = post.body.split('\n').map((p, i) => (
    <p key={i}>{p}</p>
  ));
  return (
    <>
      <h1>{post.title}</h1>
        {paragraph}
        <CommentsByPostID postID={post.id} />
        <CreateComment postID={post.id} />
    </>
  );
}

PostDetail.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired
};

export default PostDetail;
