import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Every learning section shares the same lesson shape.
const lessonSchema = z.object({
  title: z.string(),
  description: z.string(),
  order: z.number(),
});

// Factory so each technology section is defined identically.
const section = (dir: string) =>
  defineCollection({
    loader: glob({
      base: `./src/content/${dir}`,
      pattern: "**/*.{md,mdx}",
    }),
    schema: lessonSchema,
  });

export const collections = {
  linux: section("linux"),
  github: section("github"),
  aws: section("aws"),
  azure: section("azure"),
  python: section("python"),
  ansible: section("ansible"),
};
