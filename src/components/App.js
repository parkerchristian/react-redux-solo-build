import React from 'react';
import CreatePost from '../containers/CreatePost';
import AllPosts from '../containers/AllPosts';
import CommentForm from './comments/CommentForm';

export default function App() {
  return (
    <>
      <CreatePost />
      <CommentForm />
      <AllPosts />
    </>
  );
}
