import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  value: string;
  name: string;
};

export default function Button({ children, type, value, name }: Props) {
  return (
    <button
      type={type}
      value={value}
      name={name}
      className="w-28 h-12 bg-bottleg-dark text-center font-medium text-white rounded-full shadow-xl hover:bg-bottleg-darker hover:text-stone-100 active:bg-bottleg-dark transition-all duration-200"
    >
      {children}
    </button>
  );
}
