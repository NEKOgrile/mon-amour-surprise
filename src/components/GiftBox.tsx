import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

interface GiftBoxProps {
  onOpenComplete: () => void;
}

export const GiftBox: React.FC<GiftBoxProps> = ({ onOpenComplete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isOpen) return;
    setIsOpen(true);

    const duration = 3000;
    const end = Date.now() + duration;

    const fireConfetti = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#e11d48', '#fda4af', '#fb7185', '#ffffff', '#FFD700'],
        zIndex: 100,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#e11d48', '#fda4af', '#fb7185', '#ffffff', '#FFD700'],
        zIndex: 100,
      });

      if (Date.now() < end && isOpen) {
        requestAnimationFrame(fireConfetti);
      }
    };
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#e11d48', '#fda4af', '#fb7185', '#ffffff', '#FFD700'],
      zIndex: 100,
    });

    fireConfetti();

    setTimeout(() => {
      onOpenComplete();
    }, 2000);
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-rose-100 via-rose-200 to-pink-300 overflow-hidden relative"
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      {/* Coeurs en fond */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-500 select-none"
            initial={{ y: '110vh', x: Math.random() * 100 + 'vw', scale: Math.random() * 0.5 + 0.5, opacity: 0 }}
            animate={{ y: '-10vh', opacity: [0, 0.8, 0] }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5 
            }}
          >
            ♥
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 cursor-pointer group mt-20 sm:mt-0" onClick={handleClick}>
        {/* Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 bg-yellow-200 rounded-full blur-[50px] z-20"
          initial={{ height: 0, opacity: 0 }}
          animate={isOpen ? { height: 500, width: 500, opacity: [0, 0.8, 0] } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Couvercle */}
        <motion.div
          className="absolute -top-16 left-0 w-64 h-16 bg-rose-600 rounded-lg shadow-xl z-30 flex items-center justify-center border-b-4 border-rose-800"
          initial={{ y: 0, rotate: 0 }}
          animate={isOpen ? { y: -300, x: 50, rotate: -20, opacity: 0 } : { y: [0, -5, 0] }}
          transition={isOpen ? { duration: 1.2, ease: "circOut" } : { repeat: Infinity, duration: 2, repeatDelay: 1 }}
          whileHover={!isOpen ? { scale: 1.05, rotate: 2 } : {}}
        >
          <div className="w-full h-4 bg-rose-400 absolute top-1/2 -translate-y-1/2 shadow-sm"></div>
          <div className="h-full w-12 bg-rose-400 absolute left-1/2 -translate-x-1/2 shadow-sm"></div>
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-12">
            <div className="absolute left-0 w-10 h-10 border-4 border-rose-400 rounded-full rounded-br-none -rotate-45 bg-rose-500 shadow-sm"></div>
            <div className="absolute right-0 w-10 h-10 border-4 border-rose-400 rounded-full rounded-bl-none rotate-45 bg-rose-500 shadow-sm"></div>
          </div>
        </motion.div>

        {/* Corps de la boîte */}
        <motion.div 
          className="w-64 h-48 bg-rose-500 rounded-b-xl shadow-2xl relative flex items-center justify-center overflow-hidden border-t-0 border-4 border-rose-700 z-10"
          animate={isOpen ? { y: 200, opacity: 0, scale: 0.9 } : {}}
          transition={isOpen ? { duration: 1, delay: 0.2, ease: "anticipate" } : {}}
        >
          <div className="h-full w-12 bg-rose-400 absolute left-1/2 -translate-x-1/2 shadow-inner"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </motion.div>
        
        {/* Texte */}
        <motion.p 
          className="mt-16 text-center text-rose-800 font-script text-3xl font-bold drop-shadow-sm select-none relative z-0"
          initial={{ opacity: 0, y: 20 }}
          animate={isOpen ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
          transition={{ delay: isOpen ? 0 : 0.5, duration: 0.5 }}
        >
          Pour mon amour...
          <br/>
          <span className="text-lg font-sans text-rose-600 font-normal animate-pulse">(Touche pour ouvrir)</span>
        </motion.p>
      </div>
    </motion.div>
  );
};
