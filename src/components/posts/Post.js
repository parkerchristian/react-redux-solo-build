import React from 'react';
import PropTypes from 'prop-types';

function Post({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <h2>{post.body}</h2>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
