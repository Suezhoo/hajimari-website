import React from "react";

const NavigationBar = () => {
  return (
    <div className="flex justify-between py-gutter-y px-gutter-x">
      <div className="nav-bold">
        <p>PROJECT</p>
        <p>HAJIMARI</p>
      </div>

      <div className="flex nav-medium nav-items-gap">
        <p>ABOUT</p>
        <p>DEVLOG</p>
        <p>ROADMAP</p>
        <p>PATCH NOTES</p>
        <p>TECH</p>
      </div>
      <div className="nav-medium text-right">
        <p>PRE-ALPHA</p>
        <p>V0.0.01</p>
      </div>
    </div>
  );
};

export default NavigationBar;
