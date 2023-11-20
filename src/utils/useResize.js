import { useState, useEffect } from 'react';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenForBurger: width >= 920,
    isScreenForFirstPosition: width > 1160,
    isScreenForSecondPosition: width < 1160,
    isScreenForThirdPosition: width > 708,
    isScreenForFourthPosition: width < 708,
  };
};
