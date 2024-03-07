import { getAllPosts } from "@/lib/api";

import Container from "../components/container";

import { HeroPost } from "../components/hero-post";
import { MoreStories } from "../components/more-stories";
import Header from "../components/header";

export default async function Page() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Header title="Blog" />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};
