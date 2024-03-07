import { Key } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { CMS_NAME } from "../../../lib/constants";
import { getAllPosts, getPostBySlug } from "../../../lib/api";

import Header from "../../components/header";
import Container from "../../components/container";
import { PostHeader } from "../../components/post-header";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <main>
      <Container>
        <article className="mt-12 mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <h3>{post.excerpt}</h3>
          {post.education && (
            <section>
              <ul>
                <h3>Education</h3>
                {post.education.map((step: any, i: Key | null | undefined) => (
                  <div key={i} className="flex flex-col p-6 gap-2">
                    <h6>{step.institution}</h6> <p>{step.location}</p>
                    <p>{step.field}</p>
                    <p>{step.duration}</p>
                  </div>
                ))}
              </ul>
            </section>
          )}
          {/*           <PostBody content={content} />
           */}{" "}
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
