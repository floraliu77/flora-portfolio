import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    summary: z.string(),
    subtitle: z.string().optional(),
    order: z.number(),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
    coverAlt: z.string().default(''),
    // Alternative cover: up to 3 phone screens shown side by side
    coverScreens: z.array(z.object({ src: z.string(), alt: z.string() })).max(3).optional(),
    tags: z.array(z.string()).default([]),
    highlight: z.string().optional(),
    overview: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    impact: z.array(z.object({ stat: z.string(), label: z.string() })).default([]),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { work };
