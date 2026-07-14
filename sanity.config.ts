'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, projectId } from './sanity/env'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio', name: 'candellar', title: 'Candellar Education CMS',
  projectId, dataset, schema: { types: schemaTypes },
  plugins: [structureTool({
    structure: (S) => S.list().title('Website tabs').items([
      S.listItem().title('Home tab').child(S.list().title('Home tab').items([
        S.documentTypeListItem('siteSettings').title('Home page settings'),
        S.listItem().title('What is featured on Home').child(S.list().title('Choose an item below and turn on “Feature on home page”').items([
          S.documentTypeListItem('programme').title('Featured programmes'),
          S.documentTypeListItem('resource').title('Featured resources'),
          S.documentTypeListItem('post').title('Featured news & updates'),
          S.documentTypeListItem('video').title('Featured reels & videos'),
          S.documentTypeListItem('studentWork').title('Featured student work'),
          S.documentTypeListItem('teamMember').title('Featured team members'),
        ])),
      ])),
      S.documentTypeListItem('programme').title('Programmes tab'),
      S.documentTypeListItem('resource').title('Resources tab'),
      S.listItem().title('Content tab').child(S.list().title('Content tab').items([
        S.documentTypeListItem('post').title('News & updates'),
        S.documentTypeListItem('video').title('Reels & videos'),
        S.documentTypeListItem('testimonial').title('Parent reviews'),
      ])),
      S.documentTypeListItem('studentWork').title('Student Work tab'),
      S.documentTypeListItem('teamMember').title('Team tab'),
      S.documentTypeListItem('facebookPost').title('Community tab — Facebook posts & reels'),
      S.divider(),
      S.documentTypeListItem('enquiry').title('Parent enquiries'),
    ]),
  }), visionTool({ defaultApiVersion: apiVersion })],
})
