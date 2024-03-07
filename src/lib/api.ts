import { Post } from "@/interfaces/post";
import { Section, SectionBlock } from "@/interfaces/section";

import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");
const homeDirectory = join(process.cwd(), "_home");
const aboutDirectory = join(process.cwd(), "_about-me");

export function getHomeSlugs() {
  return fs.readdirSync(homeDirectory);
}
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getSectionBySlug(slug: string) {
  console.log("getSectionBySlug", slug);

  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(homeDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return data as Section;
}

export function getPageBySlug(slug: string, directory: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(directory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllSections(): SectionBlock[] {
  const slugs = getHomeSlugs();
  console.log("getHomeSlugs", getHomeSlugs());

  const sections = slugs
    .map((slug) => getSectionBySlug(slug))
    // sort posts by date in descending order
    .sort((a, b) => (a.order > b.order ? -1 : 1));
  return sections;
}
export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
