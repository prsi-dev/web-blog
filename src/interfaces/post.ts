import { ReactNode } from "react";
import { type Author } from "./author";

export type Post = {
  education: any;
  skills: ReactNode;
  experience: any;
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
