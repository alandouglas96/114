/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/backend/[[...index]]/page.jsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { media } from 'sanity-plugin-media'
import { muxInput } from 'sanity-plugin-mux-input'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'

const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem().title('Projects').child(S.documentTypeList('project')),
    ])

export default defineConfig({
  basePath: '/backend',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({
      structure,
    }),
    media(),
    muxInput(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
