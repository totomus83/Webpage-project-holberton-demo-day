// src/components/FadeInSection.jsx
import React, { useRef, useEffect, useState } from "react";

export default function FadeInSection({ children, className = "" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // true or false depending on scroll
      },
      { threshold: 0.15 } // adjust how much of the element must be visible
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-section ${isVisible ? "visible" : "hidden"} ${className}`}
    >
      {children}
    </div>
  );
}
