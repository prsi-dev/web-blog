import Link from "next/link";

const Header = ({ title }: { title: string }) => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-16 mt-8">
      <Link href="/" className="hover:underline">
        {title}
      </Link>
      .
    </h2>
  );
};

export default Header;
