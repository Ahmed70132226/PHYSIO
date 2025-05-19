import React from 'react';
import BlogData from '../Data/BlogData';

const Blogdetail = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">All Blog Posts</h1>

      {BlogData.map((post, index) => (
        <div className="mb-5" key={index} id={`post-${index}`}>
          <h3>{post.title}</h3>
          <p className="text-muted">{post.date}</p>
          <p>{post.summary}</p>
          <p>{post.detail}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Blogdetail;
