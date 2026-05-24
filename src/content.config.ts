import { defineCollection } from 'astro:content';

import { glob } from 'astro/loaders';

import { z } from 'astro/zod';

const songs = defineCollection({
  loader: glob({ base: './src/content/songs', pattern: '**/*.md' }),
  schema: z.object({
    id: z.number(),
    slug: z.string(),
    title: z.string(),
    tags: z.array(z.string()),
    publishedAt: z.coerce.date(),
  }),
});

export const collections = { songs };
