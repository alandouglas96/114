export default {
  name: 'project',
  type: 'document',
  title: 'Projects',
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      if (!media) return { title }
      return {
        title: title,
        media: media[0],
      }
    },
  },
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => [Rule.required().error('This field is required')],
    },
    {
      name: 'image',
      type: 'array',
      title: 'Image',
      of: [{ type: 'image' }],
      validation: (Rule) => [
        Rule.required().error('An image should be uploaded'),
      ],
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Video',
      name: 'video',
      type: 'mux.video',
    },
  ],
}
