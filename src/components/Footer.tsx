
const Footer = () => {
  return (
    <footer id="contact" className="w-full py-6 md:py-8 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center space-x-2">
          <img src="/lovable-uploads/8930250a-233e-4213-b662-2d5d374258a7.png" alt="Kreem Genomics Logo" className="h-8 w-8 rounded-sm" />
          <p className="text-sm font-semibold">Kreem Genomics</p>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Kreem Genomics. All rights reserved.</p>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
