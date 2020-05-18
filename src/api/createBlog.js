import { client, q } from '../config/db'

const createBlog = client.query(
  q.CreateFunction({
    name: 'create blog',
    body: q.Query(
      q.Lambda(
        ['title', 'body'],
        q.Create(
          q.Collection('Blog'),
          {
            data: {
              title: q.Var('title'),
              body: q.Var('body'),
            },
          },
        ),
      )
    ),
    permissions: { call: 'public' },
    role: 'server',
  })
)
  .then((ret) => console.log(ret))


export default createBlog;
