import { ReactNode } from "react";

export type SectionBlock = {
  sections: {
    title: string;
    description: string;
    slug: string;
    link: string;
    order: number;
  }[];
};
