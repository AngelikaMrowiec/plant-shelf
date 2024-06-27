import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  htmlFor: string;
  name: string;
  defaultValue?: string | number | readonly string[];
  id: string;
};

export default function TextWrap({
  children,
  htmlFor,
  name,
  defaultValue,
  id,
}: Props) {
  return (
    <div className="w-full">
      <label
        htmlFor={htmlFor}
        className="block text-2xl font-extrabold text-gray-800 mb-2"
      >
        {children}
      </label>
      <textarea
        id={id}
        defaultValue={defaultValue}
        required
        name={name}
        className="w-full h-40 p-3 shadow-xl bg-white rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-1 focus:ring-bottleg-dark focus:border-transparent"
      />
    </div>
  );
}
