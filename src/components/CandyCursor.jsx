import React, { useEffect, useState } from 'react';

// A custom candy-cane cursor that follows the mouse
export default function CandyCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    document.body.style.cursor = 'none';
    return () => {
      window.removeEventListener('mousemove', move);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      aria-hidden
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
      >
        <path d="M36 6c-7 0-12 5-12 12 0 6 4 9 8 13 4 4 8 8 8 15 0 6-5 12-12 12" stroke="#ffffff" strokeWidth="6" strokeLinecap="round"/>
        <path d="M30 8c-3 2-6 5-6 10m8 8c-3 2-6 5-6 10m18-26c-3 2-6 5-6 10m4 20c-2 3-5 6-10 6" stroke="#ef4444" strokeWidth="6" strokeLinecap="round"/>
      </svg>
    </div>
  );
}
