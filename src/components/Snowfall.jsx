import React, { useEffect, useMemo } from 'react';

export default function Snowfall({ count = 80 }) {
  const flakes = useMemo(() => Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 2 + Math.random() * 3,
    delay: Math.random() * 10,
    duration: 8 + Math.random() * 8,
    opacity: 0.4 + Math.random() * 0.6,
  })), [count]);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `@keyframes snow-fall { 0% { transform: translateY(-10vh); } 100% { transform: translateY(110vh); } }`;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[5]">
      {flakes.map((f) => (
        <div
          key={f.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${f.left}vw`,
            top: '-10vh',
            width: f.size,
            height: f.size,
            opacity: f.opacity,
            filter: 'blur(0.5px)',
            animation: `snow-fall ${f.duration}s linear ${f.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
