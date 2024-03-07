import { Key } from "react";

import { getPageBySlug } from "@/lib/api";

import Header from "../components/header";
import Container from "../components/container";
import { PostHeader } from "../components/post-header";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Avatar from "../components/avatar";
import { PostTitle } from "../components/post-title";
import CoverImage from "../components/cover-image";

export default async function AboutMe() {
  const aboutPage = getPageBySlug("about-me", "_about-me");
  console.log(aboutPage);

  return (
    <main>
      <Container>
        <Header title={aboutPage.title} />
        <article className="mb-24">
          <>
            <div className="hidden md:block md:mb-12">
              <Avatar
                name={aboutPage.author.name}
                picture={aboutPage.author.picture}
              />
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="block md:hidden mb-6">
                <Avatar
                  name={aboutPage.author.name}
                  picture={aboutPage.author.picture}
                />
              </div>
            </div>
          </>
          <h3>{aboutPage.excerpt}</h3>
          <section>
            <aside>{aboutPage.skills}</aside>
            <>
              {aboutPage.experience.map(
                (job: any, i: Key | null | undefined) => (
                  <div key={i} className="flex flex-col p-6 gap-2">
                    <h6>{job.role}</h6> <p>{job.location}</p>
                    <p>{job.duration}</p>
                  </div>
                )
              )}
            </>
          </section>
          <section>
            <h3>Education</h3>
            {aboutPage.education.map((step: any, i: Key | null | undefined) => (
              <div key={i} className="flex flex-col p-6 gap-2">
                <h6>{step.institution}</h6> <p>{step.location}</p>
                <p>{step.field}</p>
                <p>{step.duration}</p>
              </div>
            ))}
          </section>
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
