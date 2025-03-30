import { defineCollection, z } from "astro:content";

const docsCollection = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
    order: z.number().optional(),
    toc: z.boolean().default(true),
  }),
});

export const collections = {
  docuception: docsCollection,
};