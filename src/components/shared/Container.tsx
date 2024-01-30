import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Container: FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("px-3 w-full max-w-[1304px] mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
