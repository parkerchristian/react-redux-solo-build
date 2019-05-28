import React from 'react';
import CreatePost from '../containers/CreatePost';
import AllPosts from '../containers/AllPosts';
import CreateComment from '../containers/CreateComment';

export default function App() {
  return (
    <>
      <CreatePost />
      <CreateComment />
      <AllPosts />
    </>
  );
}
