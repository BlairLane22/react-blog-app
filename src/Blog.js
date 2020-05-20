import React from 'react'
import { createBlog } from './api'

export default function Blog() {

  function handleSubmit() {
    var title = document.getElementById('title').value;
    var body = document.getElementById('body').value;
    console.log("Title: ", title)
    console.log("Body: ", body)
    createBlog(title, body);
  }

  return (
    <div className="table">
      Title: <input type="title" id="title" /><br/>
      Body: <input type="body" id="body" /><br/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
