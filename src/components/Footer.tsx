
import { Dna } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="w-full py-6 md:py-8 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center space-x-2">
          <Dna className="h-6 w-6 text-green-400" />
          <p className="text-sm font-semibold">Helix Dynamics</p>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Helix Dynamics. All rights reserved.</p>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
