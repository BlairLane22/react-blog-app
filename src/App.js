import React, { useEffect, useState  } from 'react';
import './App.css';
import Blog from './Blog';
import { createBlog, getAllBlogs } from './api';

function App() {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    var time = getAllBlogs.then(res => setBlogs(res))
    console.log(time);
  }, [])

  return (
    <div className="App">
      <Blog />
    </div>
  );
}

export default App;
