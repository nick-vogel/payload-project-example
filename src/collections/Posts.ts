import type {CollectionConfig} from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: ({req: {user}}) => {
      if (!user) return false
      return {author: {equals: user.id}}
    }
  },
  fields: [{name: 'title', type: 'text'}]
}