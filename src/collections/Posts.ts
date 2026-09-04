import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: ({ req: { user } }) => {
      if (!user) return false
      return {
        'author.value': { equals: user.id },
      }
    },
  },
  fields: [
    { name: 'title', type: 'text' },
    {
      name: 'testVirtualField',
      type: 'number',
      virtual: true,
      defaultValue: 10,
    },
    {
      name: 'layout',
      type: 'blocks',
      blockReferences: ['hero', 'content'],
      blocks: [],
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: ['users'],
      hasMany: true,
      maxDepth: 2,
      filterOptions: ({ relationTo, data }) =>
        relationTo === 'users' && { active: { not_equals: false } },
      admin: {
        allowCreate: false,
        allowEdit: false,
        isSortable: false,
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
