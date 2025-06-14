
import { useEffect, useState, useRef } from 'react';
import { removeBackground, loadImage } from '@/lib/image';

const ORIGINAL_LOGO_SRC = '/lovable-uploads/8930250a-233e-4213-b662-2d5d374258a7.png';

const Logo = ({ className }: { className?: string }) => {
  const [logoSrc, setLogoSrc] = useState<string>(ORIGINAL_LOGO_SRC);
  const processingAttempted = useRef(false);

  useEffect(() => {
    if (processingAttempted.current || window.navigator.userAgent.includes('Headless')) return;
    processingAttempted.current = true;

    const processLogo = async () => {
      try {
        console.log('Fetching logo for background removal...');
        const imageBlob = await fetch(ORIGINAL_LOGO_SRC).then(res => res.blob());
        const imageElement = await loadImage(imageBlob);
        
        console.log('Removing background from logo...');
        const processedBlob = await removeBackground(imageElement);
        const url = URL.createObjectURL(processedBlob);
        setLogoSrc(url);
        console.log('Logo background removed successfully.');
      } catch (error) {
        console.error("Failed to process logo:", error);
      }
    };

    processLogo();
    
    // We don't revoke the object URL because it's needed for the lifetime of the component.
    // The browser will handle it when the page is closed.
  }, []);

  return (
    <img 
      src={logoSrc} 
      alt="Kreem Genomics Logo" 
      className={className} 
    />
  );
};

export default Logo;
