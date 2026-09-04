import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    { name: 'active', type: 'checkbox', defaultValue: true },
    {
      name: 'posts',
      type: 'join',
      collection: 'posts',
      on: 'author',
    },
  ],
}
