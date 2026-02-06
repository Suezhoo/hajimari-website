const Footer = () => {
  return (
    <div className="grid-container--footer relative bg-surface text-ink footer-border px-gutter-x">
      <div className="col-span-12 w-full h-full py-gutter-y">
        <div className="flex flex-col gap-3 text-center lg:flex-row lg:justify-between lg:items-center lg:text-left">
          <div className="flex gap-2.5 items-center justify-center lg:justify-start">
            <p className="footer-bold uppercase">Hajimari</p>
            <span className="footer-medium">•</span>
            <p className="footer-medium italic">Pre-Alpha v0.0.1</p>
          </div>

          <div className="flex gap-2.5 items-center justify-center footer-small italic lg:justify-end">
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
