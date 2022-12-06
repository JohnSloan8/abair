// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface scrollToTopProps {
  children: React.ReactNode;
}

const ScrollToTop = ({ children }: scrollToTopProps) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
