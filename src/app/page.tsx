import Container from "@/app/components/container";
import { Intro } from "@/app/components/intro";
import { getAllSections } from "../lib/api";
import Link from "next/link";

export default function Index() {
  const allSections = getAllSections();
  console.log(
    "Sections",
    allSections[0].sections.map((section) => section)
  );

  return (
    <main>
      <Container>
        <section className="flex flex-col gap-4 pb-4 justify-center mt-6">
          {allSections[0].sections.map((section, i) => (
            <Link href={section.slug} aria-label={section.link}>
              <div
                key={i}
                className="rounded-lg flex flex-col gap-4 border  h-40 justify-center align-middle p-8 hover:bg-zinc-50  after:bg-zinc-50 dark:hover:bg-slate-900 dark:active:bg-slate-900"
              >
                <h6 className="text-center text-lg font-bold dark:text-zinc-100">
                  {section.title}
                </h6>
                {section.description && (
                  <p className="text-center text-balance font-light dark:text-zinc-100">
                    {section.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </section>
      </Container>
    </main>
  );
}
