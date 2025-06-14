
import Logo from './Logo';

const Footer = () => {
  return (
    <footer id="contact" className="w-full py-12 md:py-16 border-t bg-secondary/30">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="flex items-center space-x-2">
            <Logo className="h-8 w-8 rounded-sm" />
            <p className="text-lg font-semibold">Kreem Genomics</p>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Pioneering the future of genomics to build a healthier tomorrow for everyone.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-foreground">Contact Us</h3>
          <p className="text-sm text-muted-foreground">123 Gene Street, Biotech City, 12345</p>
          <a href="mailto:contact@kreemgenomics.com" className="text-sm text-muted-foreground hover:text-foreground">contact@kreemgenomics.com</a>
          <p className="text-sm text-muted-foreground mt-1">(123) 456-7890</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-foreground">Quick Links</h3>
          <div className="flex flex-col space-y-1 items-center md:items-start">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground">Services</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground">About</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="container text-center mt-12 pt-8 border-t border-border/50">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Kreem Genomics. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
