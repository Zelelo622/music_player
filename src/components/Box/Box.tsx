import { twMerge } from "tailwind-merge";
import { BoxProps } from "./types";

const Box: React.FC<BoxProps> = ({ children, className }) => (
  <div className={twMerge(`bg-neutral-900 rounded-lg h-fit w-full`, className)}>
    {children}
  </div>
);

export default Box;
