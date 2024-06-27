import { Form, Link } from "react-router-dom";
import { ReactNode } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

type Props = {
  children: ReactNode;
  method: "get" | "post" | "put" | "delete" | "patch";
};

export default function FormWrap({ children, method }: Props) {
  return (
    <Form
      method={method}
      className="relative flex flex-col justify-center items-center h-5/6 bg-white bg-opacity-50 p-8 md:w-3/5 md:m-auto rounded-lg shadow-2x"
    >
      <Link to=".." className="absolute top-4 left-4">
        <AiOutlineCloseCircle size="30" color="#0c3213" />
      </Link>
      {children}
    </Form>
  );
}
