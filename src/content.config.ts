import { defineCollection, z } from "astro:content";

const docsCollection = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  docuception: docsCollection,
};