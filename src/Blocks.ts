import type {Block} from 'payload'

export const Hero: Block = {
  slug: 'hero',
  fields: [
    {name: 'heading', type: 'text', required: true},
    {name: 'background', type: 'upload', relationTo: 'media'}
  ]
}

export const Content: Block = {
  slug: 'content',
  fields: [{name: 'text', type: 'richText'}]
}