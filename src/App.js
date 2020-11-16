import React, { useEffect, useState } from 'react';
import data from './data';
import './App.css';

export function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    data.getPosts().then(setPosts);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Some Posts For YOU!</h1>
      </header>
      <section className="content">
        {posts.map(post =>
          <div key={post.id}>
            <label>Title: </label>
            <span>{post.title} </span>
            <label>Author: </label>
            <span>{post.author}</span>
          </div>
        )}
      </section>
    </div>
  );
}
