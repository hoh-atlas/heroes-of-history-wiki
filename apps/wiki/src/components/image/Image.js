import './Image.css';
import { useEffect, useState } from 'react';

const Image = ({ 
  src, 
  alt, 
  centered = true, 
  maxWidth, 
  maxHeight, 
  heightMobile,
  roundedCorners = false, 
  cornerRadius, 
  inline = false, 
  spacing = false, 
  ...rest 
}) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const imageStyles = {
    maxWidth: maxWidth ? maxWidth : '100%',
    maxHeight: isMobile && heightMobile ? heightMobile : maxHeight ? maxHeight : '100%',
    borderRadius: roundedCorners ? (cornerRadius ? cornerRadius : '0.50rem') : '0',
    marginTop: spacing ? '20px' : '0',
    marginBottom: spacing ? '20px' : '0',
    display: inline ? 'inline-block' : 'block',
    verticalAlign: 'middle',
    ...rest
  };

  return (
    <div className={`${centered && !inline ? 'centered-image-container' : ''} ${inline ? 'inline-image-container' : ''}`}>
      <img src={src} alt={alt} style={imageStyles} />
    </div>
  );
};

export default Image;
