import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <div
      className="h-full rounded-2xl border hover:border-yellow-200 border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
    >
      {children}
    </div>
  );
};

export default Card;