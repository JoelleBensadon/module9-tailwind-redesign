
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
      {children}
    </div>
  );
}

export default Card;
