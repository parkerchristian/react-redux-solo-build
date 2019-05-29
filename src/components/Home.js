import React from 'react';
import CreatePost from '../containers/CreatePost';
import AllPosts from '../containers/AllPosts';

export default function Home() {
  return (
    <>
      <h1>Posts</h1>
      <section>
        <h2>Create Post</h2>
        <CreatePost />
      </section>
      <section>
        <AllPosts />
      </section>
    </>
  );
}
