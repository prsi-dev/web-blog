import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-balance font-extrabold text-2xl md:text-7xl lg:text-8xl  tracking-tighter leading-tight md:leading-none mb-16 text-left">
      {children}
    </h1>
  );
}
