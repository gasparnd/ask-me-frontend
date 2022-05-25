import { PropsWithChildren } from "react";

interface IProps {}

export const Layout = ({ children }: PropsWithChildren<IProps>) => {
  return (
    <div className="bg-darkBackground">
      <div style={{ margin: "0 auto" }} className="max-w-maxW px-3">
        <main>{children}</main>
      </div>
    </div>
  );
};
