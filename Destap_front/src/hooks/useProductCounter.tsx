import { useState } from "react";

export const useProductCounter = () => {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleIncrease = () => {
    setCount(prev => prev + 1);
    triggerAnimation();
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
      triggerAnimation();
    }
  };

  const triggerAnimation = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 100); // Duración de tu animación
  };

  return { count, handleIncrease, handleDecrease, animate };
};
