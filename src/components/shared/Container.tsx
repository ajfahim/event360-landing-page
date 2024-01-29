import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <div className="px-3 w-full max-w-[1304px] mx-auto">{children}</div>;
};

export default Container;
