import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";

export function Intro() {
  return (
    <Link href="/" aria-label="Go back home">
      <section className="flex-col items-center md:justify-between mt-4 mb-4 md:mb-12 pl-6">
        <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          PRSI.dev
        </h1>
        <p className="text-xs md:text-lg">PixelRiderSurfingInterface</p>
      </section>
    </Link>
  );
}
