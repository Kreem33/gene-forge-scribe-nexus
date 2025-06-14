
const ORIGINAL_LOGO_SRC = '/lovable-uploads/8930250a-233e-4213-b662-2d5d374258a7.png';

const Logo = ({ className }: { className?: string }) => {
  return (
    <img 
      src={ORIGINAL_LOGO_SRC} 
      alt="Kreem Genomics Logo" 
      className={className} 
    />
  );
};

export default Logo;
