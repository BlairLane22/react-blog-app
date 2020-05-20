import { client, q } from '../config/db'

const getAllBlogs = client.query(
  q.Get(
    q.Match(
      q.Index("allBlogs"))
  )
)
.then((ret) => console.log(ret))

export default getAllBlogs;
