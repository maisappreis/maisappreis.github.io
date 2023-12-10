import React, { useEffect, useRef } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ label, targetProgress }) => {
  const progressBarRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProgressBar();
            observer.unobserve(progressBarRef.current);
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(progressBarRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const animateProgressBar = () => {
    const duration = 500;
    const startTime = performance.now();

    const step = (currentTime) => {
      const progress = Math.min(1, (currentTime - startTime) / duration);
      progressBarRef.current.style.width = `${progress * targetProgress}%`;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <div>
      <p className="progress-label">{label}</p>
      <div className="progress-bar">
        <div ref={progressBarRef} className="progress"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
