import { headers as nextHeaders } from 'next/headers'
import { getPayloadClient } from '@/lib/payload'

export default async function DashboardPage() {
  const headers = await nextHeaders()
  const payload = await getPayloadClient()
  const { user } = await payload.auth({ headers })
  const posts = await payload.find({
    collection: 'posts',
    user: user,
    overrideAccess: false,
  })
  return posts.docs.map((post) => <h2 key={post.id}>{post.title}</h2>)
}
