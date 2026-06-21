import { useRef } from 'react';

const useTouchSwipe = ({ handleNext, handleBack, threshold = 50 }) => {
  const touchStartX = useRef(null);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > threshold) {
      delta > 0 ? handleNext() : handleBack();
    }
    touchStartX.current = null;
  };

  return { onTouchStart, onTouchEnd };
};

export default useTouchSwipe;
