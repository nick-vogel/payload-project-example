import { getPayloadClient } from '@/lib/payload'

export default async function PostPage({ params }) {
  const { id } = await params
  const payload = await getPayloadClient()
  const post = await payload.findByID({
    collection: 'posts',
    id,
  })
  console.log(post)
  return <h1>{post.title}</h1>
}
