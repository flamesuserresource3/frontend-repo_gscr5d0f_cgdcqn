import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

function Character({ emoji, name, x, y, mouse, message }) {
  const distance = useMemo(() => {
    const dx = mouse.x - x;
    const dy = mouse.y - y;
    return Math.sqrt(dx * dx + dy * dy);
  }, [mouse, x, y]);

  const active = distance < 120;

  return (
    <motion.div
      className="absolute select-none"
      style={{ left: x, top: y }}
      animate={{ scale: active ? 1.25 : 1, y: active ? -6 : 0, rotate: active ? -5 : 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 12 }}
    >
      <div className="relative flex items-center justify-center">
        <div className="text-4xl md:text-5xl drop-shadow-lg">{emoji}</div>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute -top-8 whitespace-nowrap rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-indigo-700 shadow-md"
          >
            {message}
          </motion.div>
        )}
      </div>
      <div className="mt-1 text-center text-xs font-medium text-white/90">{name}</div>
    </motion.div>
  );
}

export default function InteractiveCharacters() {
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const handler = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  // Pre-set character positions for responsiveness
  const characters = [
    { emoji: '🎅', name: 'Santa', x: 60, y: 40, message: 'Ho Ho Ho! 🎄' },
    { emoji: '☃️', name: 'Snowman', x: 260, y: 140, message: 'Brrr! ❄️' },
    { emoji: '🧝', name: 'Elf', x: 520, y: 80, message: 'Toy time! 🧰' },
    { emoji: '🎁', name: 'Gift', x: 420, y: 200, message: 'Open me! 🎀' },
    { emoji: '🍭', name: 'Pop', x: 160, y: 220, message: 'Sweet! 🍬' },
  ];

  return (
    <section id="characters" className="relative w-full bg-gradient-to-b from-indigo-950 to-slate-950 py-16 md:py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Meet the Christmas Crew</h2>
        <p className="mt-2 text-white/80">Move your candy-cane cursor near a character to see them react.</p>
      </div>

      <div className="relative mx-auto mt-8 h-[320px] w-full max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-600/20 via-indigo-600/10 to-sky-600/20 ring-1 ring-white/10">
        <div className="absolute inset-0">
          {characters.map((c, idx) => (
            <Character key={idx} {...c} mouse={mouse} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.09),transparent_40%)]" />
      </div>
    </section>
  );
}
