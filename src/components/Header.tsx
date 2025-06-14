
import { Dna } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Dna className="h-6 w-6 text-green-400" />
            <span className="font-bold">Kreem Genomics</span>
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#services" className="transition-colors hover:text-green-400 text-foreground/60">Services</a>
            <a href="#about" className="transition-colors hover:text-green-400 text-foreground/60">About</a>
            <a href="#contact" className="transition-colors hover:text-green-400 text-foreground/60">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
