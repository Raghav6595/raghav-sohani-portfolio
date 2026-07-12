import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
}

const Section = ({ children, id }: Props) => {
  return (
    <section
      id={id}
      className="py-8"
    >
      {children}
    </section>
  );
};

export default Section;