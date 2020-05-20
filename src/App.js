import React, { useEffect, useState  } from 'react';
import './App.css';
import Blog from './Blog';
import { createBlog, getAllBlogs } from './api';

function App() {

  return (
    <div className="App">
      <Blog />
    </div>
  );
}

export default App;
