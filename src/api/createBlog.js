import { client, q } from '../config/db'

export default function createBlog(title, body) {
  client.query(
    q.Create(
        q.Index('allBlogs'),
            {
              data: {
                title: q.Var(title),
                body: q.Var(body),
              },
            },
          ),
        )
      .then((ret) => console.log(ret))
}
