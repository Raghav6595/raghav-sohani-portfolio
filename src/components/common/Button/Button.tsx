import type { ReactNode } from "react";

import { ArrowRight } from "lucide-react";

type Props = {
  children: ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button
      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
    >
      {children}

      <ArrowRight size={18} />
    </button>
  );
};

export default Button;