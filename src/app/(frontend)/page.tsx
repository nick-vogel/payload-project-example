import { getPayloadClient } from '@/lib/payload'

export default async function HomePage() {
  const payload = await getPayloadClient()
  const posts = await payload.find({
    collection: 'posts',
    where: {
      title: { contains: 'payload' },
    },
    limit: 1,
    page: 1,
    sort: '-createdAt',
  })
  console.log(posts)

  return null
}
