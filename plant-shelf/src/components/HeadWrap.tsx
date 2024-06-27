import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  htmlFor: string;
  name: string;
  type: string;
  defaultValue?: string | number | readonly string[];
  id: string;
};

export default function HeadWrap({
  children,
  htmlFor,
  name,
  type,
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
      <input
        defaultValue={defaultValue}
        required
        id={id}
        name={name}
        type={type}
        className="w-full p-3 shadow-xl bg-white rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-bottleg-dark focus:border-transparent"
      />
    </div>
  );
}
