import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Container;