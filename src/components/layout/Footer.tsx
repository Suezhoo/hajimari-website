import React from "react";

const Footer = () => {
  return (
    <div className="footer-container footer-border px-gutter-x">
      {/* logo */}
      <div className="col-start-1 col-end-6 w-full h-full py-gutter-y">
        <p className="footer-bold">HAJIMARI &copy;</p>
        <p className="footer-medium">Built in public</p>
      </div>

      <div className="col-start-6 col-end-13 flex footer-separator">
        <div className="flex flex-1 flex-col justify-between py-gutter-y px-[30px]">
          <div className="uppercase">
            <p className="footer-bold">About Hajimari</p>
            <p className="footer-medium">Project</p>
            <p className="footer-medium">Developer</p>
          </div>
          <div className="uppercase">
            <p className="footer-bold">Updates</p>
            <p className="footer-medium">Devlog</p>
            <p className="footer-medium">Roadmap</p>
            <p className="footer-medium">Patch Notes</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col py-gutter-y px-[30px] uppercase">
          <p className="footer-bold">Technology</p>
          <p className="footer-medium">Website</p>
          <p className="footer-medium">Game</p>
        </div>
        <div className="flex-1 flex flex-col py-gutter-y px-[30px] uppercase">
          <p className="footer-bold">Socials</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
