import React from 'react';
import { Link } from 'react-router-dom';

import BlogData from '../Data/BlogData';


const Blog = () => {
  return (
    <div className="container my-5">
      <section className="text-center mb-5">
        <h1 className="display-4 mb-3">Welcome to the Physio Blog</h1>
        <p className="lead">
          Discover expert advice on physiotherapy, chiropractic care, posture correction, and healthy lifestyle tips. 
          Follow us on Facebook for updates!
        </p>
      </section>

      <div className="row">
        {BlogData.map((post, index) => (
          <div className="col-12 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title">{post.title}</h3>
                <h6 className="card-subtitle mb-3 text-muted">{post.date}</h6>
                <p className="card-text mb-4">{post.summary}</p>
                <Link to={"/BlogDetail"} className="btn btn-outline-dark rounded-pill px-4 py-2">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
