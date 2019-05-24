import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Post({ post }) {
  return (
    <>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
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
