const Footer = () => {
  return (
    <div className="grid-container--footer relative bg-surface text-ink footer-border px-gutter-x">
      <div className="col-start-1 col-span-full w-full h-full py-gutter-y">
        <div className="flex justify-between items-center">
          <div className="flex gap-2.5 items-center">
            <p className="footer-bold uppercase">Hajimari</p>
            <span className="footer-medium">•</span>
            <p className="footer-medium italic">Pre-Alpha v0.0.1</p>
          </div>

          <div className="flex gap-2.5 items-center footer-small italic">
            <p>&copy; 2026</p>
            <span>•</span>
            <p>Hajimari</p>
            <span>•</span>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
