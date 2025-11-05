import React from 'react';
import Hero3D from './components/Hero3D';
import CandyCursor from './components/CandyCursor';
import InteractiveCharacters from './components/InteractiveCharacters';
import GamesPanel from './components/GamesPanel';
import Snowfall from './components/Snowfall';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white relative">
      <CandyCursor />
      <Snowfall />
      <Hero3D />
      <InteractiveCharacters />
      <GamesPanel />
      <footer className="relative bg-black/80 py-10 text-center text-white/70">
        Wishing you joy, warmth, and wonder. Happy Christmas! 🎄✨
      </footer>
    </div>
  );
}
