import type { CollectionEntry } from "astro:content";
import { withBase } from "./url";

/** Any lesson section collection. */
type LessonEntry = CollectionEntry<"linux" | "github" | "aws" | "azure">;

export interface LessonNavLink {
  title: string;
  url: string;
}

/**
 * Build getStaticPaths() entries for a lesson section.
 *
 * Generic over the concrete collection entry type (T) so the `collection`
 * discriminant is preserved on `props.lesson` — that's what render(lesson)
 * needs downstream.
 *
 * Sorts lessons by their `order` frontmatter and attaches the previous/next
 * lesson (as base-aware URLs) so LessonLayout renders correct navigation for
 * ANY section (linux, github, aws, azure, ...) without a hardcoded list.
 */
export function buildLessonPaths<T extends LessonEntry>(
  section: string,
  lessons: T[]
) {
  const sorted = [...lessons].sort((a, b) => a.data.order - b.data.order);

  const toLink = (l: T | null): LessonNavLink | null =>
    l ? { title: l.data.title, url: withBase(`/${section}/${l.id}`) } : null;

  return sorted.map((lesson, index) => ({
    params: { slug: lesson.id },
    props: {
      lesson,
      prev: toLink(index > 0 ? sorted[index - 1] : null),
      next: toLink(index < sorted.length - 1 ? sorted[index + 1] : null),
    },
  }));
}
