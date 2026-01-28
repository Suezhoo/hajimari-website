import React, { type ReactNode } from "react";
import NavigationBar from "./NavigationBar";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="bg-surface min-h-screen min-w-screen px-gutter-x">
      <NavigationBar />
      {children}
    </div>
  );
};

export default DefaultLayout;
