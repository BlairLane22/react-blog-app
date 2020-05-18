import { client, q } from '../config/db'

const getAllBlogs = client.query(
  q.Paginate(q.Match(q.Ref('indexes/allBlogs')))
)
.then((ret) => console.log(ret))

export default getAllBlogs;
