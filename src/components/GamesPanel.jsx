import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function GiftHunt() {
  const [secret, setSecret] = useState(() => Math.floor(Math.random() * 6));
  const [revealed, setRevealed] = useState(Array(6).fill(false));
  const [found, setFound] = useState(false);

  const reset = () => {
    setSecret(Math.floor(Math.random() * 6));
    setRevealed(Array(6).fill(false));
    setFound(false);
  };

  const onOpen = (idx) => {
    if (revealed[idx] || found) return;
    const next = [...revealed];
    next[idx] = true;
    setRevealed(next);
    if (idx === secret) setFound(true);
  };

  return (
    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 md:p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Gift Hunt</h3>
        <button onClick={reset} className="text-sm rounded-full bg-white/10 hover:bg-white/20 px-3 py-1">Reset</button>
      </div>
      <p className="mt-1 text-sm text-white/80">One box hides a shining star. Can you find it?</p>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.button
            key={i}
            onClick={() => onOpen(i)}
            whileTap={{ scale: 0.95 }}
            className="aspect-square w-full rounded-xl bg-gradient-to-br from-fuchsia-500/30 to-indigo-500/30 backdrop-blur-sm ring-1 ring-white/10 flex items-center justify-center text-3xl"
          >
            {revealed[i] ? (i === secret ? '⭐' : '🎁') : '🎀'}
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {found && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="mt-4 rounded-xl bg-emerald-500/20 px-4 py-3 text-emerald-200 ring-1 ring-emerald-400/30"
          >
            You found the star! Make a wish ✨
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function WordPuzzle() {
  const TARGET = 'SANTA';
  const CHOICES = ['S','A','N','T'];
  const [letters, setLetters] = useState(() => Array.from({ length: TARGET.length }, () => CHOICES[Math.floor(Math.random()*CHOICES.length)]));
  const correct = letters.join('') === TARGET;

  const cycle = (i) => {
    if (correct) return;
    setLetters((prev) => {
      const idx = CHOICES.indexOf(prev[i]);
      const next = [...prev];
      next[i] = CHOICES[(idx + 1) % CHOICES.length];
      return next;
    });
  };

  const reset = () => {
    setLetters(Array.from({ length: TARGET.length }, () => CHOICES[Math.floor(Math.random()*CHOICES.length)]));
  };

  return (
    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 md:p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Spell it Out</h3>
        <button onClick={reset} className="text-sm rounded-full bg-white/10 hover:bg-white/20 px-3 py-1">Shuffle</button>
      </div>
      <p className="mt-1 text-sm text-white/80">Tap the letters to spell SANTA.</p>
      <div className="mt-4 flex items-center justify-center gap-2">
        {letters.map((ch, i) => (
          <motion.button
            key={i}
            onClick={() => cycle(i)}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: ch === TARGET[i] ? -6 : 0, scale: ch === TARGET[i] ? 1.1 : 1 }}
            className="h-14 w-14 rounded-xl bg-gradient-to-br from-amber-500/30 to-rose-500/30 ring-1 ring-white/10 text-2xl font-extrabold"
          >
            {ch}
          </motion.button>
        ))}
      </div>
      {correct && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-xl bg-pink-500/20 px-4 py-3 text-pink-100 ring-1 ring-pink-400/30">
          Perfect! Santa is on the way 🎅
        </motion.div>
      )}
    </div>
  );
}

function TaskList() {
  const tasks = [
    'Find the shining star in the gifts',
    'Make the Snowman giggle by hovering near',
    'High-five the Elf with your cursor',
    'Open two red-ribbon boxes',
    'Spell SANTA correctly',
  ];
  return (
    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 md:p-6">
      <h3 className="text-lg font-semibold">Festive Challenges</h3>
      <ul className="mt-3 space-y-2 text-sm text-white/90 list-disc list-inside">
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default function GamesPanel() {
  return (
    <section id="games" className="relative w-full bg-gradient-to-b from-slate-950 to-black py-16 md:py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Playful Mini‑Games</h2>
        <p className="mt-2 text-white/80">Warm up with quick challenges and festive surprises.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <GiftHunt />
          <WordPuzzle />
          <TaskList />
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 md:p-6">
            <h3 className="text-lg font-semibold">Holiday Tip</h3>
            <p className="mt-2 text-sm text-white/80">Explore with your candy-cane cursor. Some characters react when you get close—others love surprise visits!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
