import { client, q } from '../config/db'

const getAllBlogs = client.query(
  q.Paginate(q.Match(q.Index('all_spell_names')))
)
.then((ret) => console.log(ret))

export default getAllBlogs;
