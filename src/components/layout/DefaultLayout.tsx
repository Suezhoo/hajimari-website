import React, { type ReactNode } from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="min-h-screen min-w-screen">
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
