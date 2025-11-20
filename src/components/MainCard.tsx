import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, UtensilsCrossed, Star } from 'lucide-react';
import { Countdown } from './Countdown';
import { PoemGenerator } from './PoemGenerator';

interface MainCardProps {
  tripDate: Date;
}

export const MainCard: React.FC<MainCardProps> = ({ tripDate }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-rose-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl w-full space-y-8"
      >
        {/* Header */}
        <motion.div variants={item} className="text-center">
          <h1 className="text-5xl sm:text-6xl font-script text-rose-600 mb-2">Joyeux Anniversaire</h1>
          <p className="text-xl text-rose-400 font-serif italic">Mon amour, prépare tes valises...</p>
        </motion.div>

        {/* Ticket doré */}
        <motion.div 
          variants={item} 
          className="relative w-full bg-gradient-to-r from-yellow-50 via-white to-yellow-50 rounded-xl shadow-xl border-2 border-gold overflow-hidden"
        >
          <div className="absolute inset-2 border-2 border-dashed border-gold/40 rounded-lg pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row">
            {/* Partie gauche */}
            <div className="bg-rose-900 p-8 md:w-1/3 flex flex-col items-center justify-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <UtensilsCrossed size={48} className="text-gold mb-4" />
              <h2 className="font-serif text-2xl text-center leading-tight text-gold">Invitation<br/>Exclusive</h2>
              <div className="mt-4 text-center">
                <span className="block text-xs uppercase tracking-widest opacity-70">Valable le</span>
                <span className="font-sans font-bold text-lg">27 Fév 2026</span>
              </div>
            </div>

            {/* Partie droite */}
            <div className="p-6 md:p-8 md:w-2/3 flex flex-col justify-center relative">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-script text-4xl text-rose-800 mb-1">Bon pour un festin</h3>
                  <p className="text-gray-500 font-sans text-sm uppercase tracking-wide">Pour mon amour et moi</p>
                </div>
                <Star className="text-gold fill-gold hidden sm:block" size={32} />
              </div>
              
              <div className="space-y-3 border-t border-b border-rose-100 py-4 my-2">
                <div className="flex items-center gap-3">
                  <div className="bg-rose-100 p-2 rounded-full">
                    <UtensilsCrossed size={18} className="text-rose-600" />
                  </div>
                  <span className="font-serif text-xl text-gray-800 font-bold">Le Grand Buffet</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-rose-100 p-2 rounded-full">
                    <MapPin size={18} className="text-rose-600" />
                  </div>
                  <span className="font-sans text-gray-600">Narbonne, France</span>
                </div>
              </div>

              <div className="absolute bottom-4 right-6 rotate-12 opacity-80">
                <div className="border-4 border-green-600 text-green-600 font-black text-xl px-4 py-1 rounded uppercase tracking-widest shadow-sm">
                  Payé
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-rose-50 rounded-full"></div>
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-rose-50 rounded-full"></div>
        </motion.div>

        {/* Countdown */}
        <motion.div variants={item} className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100 text-center">
          <h3 className="text-rose-800 font-sans font-bold uppercase tracking-wide text-sm mb-2">Le compte à rebours a commencé</h3>
          <Countdown targetDate={tripDate} />
        </motion.div>

        {/* Détails du voyage */}
        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-rose-400 flex items-start space-x-4">
            <div className="bg-rose-100 p-3 rounded-full">
              <MapPin className="text-rose-600" size={24} />
            </div>
            <div>
              <h3 className="font-serif text-xl text-gray-800 font-bold">Escapade de 3 Jours</h3>
              <p className="text-gray-600 font-sans">Destination : <span className="text-rose-600 font-semibold">La Barre</span></p>
              <p className="text-sm text-gray-400 mt-1">Détente, amour et découverte. Tout est prêt pour nous.</p>
            </div>
          </div>
        </motion.div>

        {/* Générateur de message */}
        <motion.div variants={item}>
          <PoemGenerator />
        </motion.div>

        <motion.div variants={item} className="text-center pt-8 pb-4">
          <p className="text-rose-300 text-sm font-script text-2xl">Je t'aime ❤️</p>
        </motion.div>
      </motion.div>
    </div>
  );
};
