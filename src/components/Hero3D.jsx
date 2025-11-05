import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-sky-900 via-indigo-900 to-fuchsia-900 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vZX5NNlylxke-6DM/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-900/20 to-indigo-950/70 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg"
        >
          Merry Christmas
          <span className="block text-fuchsia-300">and Happy Holidays!</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 md:mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
        >
          Enjoy a playful winter wonderland with friendly characters, cozy snow, and delightful mini‑games.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#games"
            className="rounded-full bg-fuchsia-500/90 hover:bg-fuchsia-400 text-white px-6 py-3 font-semibold shadow-lg shadow-fuchsia-900/40 transition-colors"
          >
            Jump into Games
          </a>
          <a
            href="#characters"
            className="rounded-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-semibold backdrop-blur-md ring-1 ring-white/20 transition-colors"
          >
            Meet the Characters
          </a>
        </motion.div>
      </div>
    </section>
  );
}
