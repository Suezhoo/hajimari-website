import React, { type ReactNode } from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="bg-surface min-h-screen min-w-screen">
      <NavigationBar />
      <div className="px-gutter-x">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
