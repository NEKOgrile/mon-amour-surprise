import React, { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const messages = [
  "Mon amour, ce voyage sera un festin de rires, de baisers et de souvenirs gravés à jamais.",
  "Bientôt, nous partagerons un repas délicieux, les yeux dans les yeux, et le reste du monde disparaîtra.",
  "Tu es la plus belle des surprises, et ce voyage n’est qu’un prétexte pour te chérir encore plus.",
  "Chaque jour qui nous rapproche de ce voyage fait grandir mon impatience de voir ton sourire.",
  "Ton anniversaire, un voyage, un bon repas… mais surtout toi, le plus beau cadeau de ma vie."
];

export const PoemGenerator: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      const index = Math.floor(Math.random() * messages.length);
      setMessage(messages[index]);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="mt-8 w-full max-w-md mx-auto">
      {!message && (
        <motion.button
          onClick={handleGenerate}
          disabled={loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 px-6 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full font-sans font-bold shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {loading ? (
            <Sparkles className="animate-spin" size={20} />
          ) : (
            <Sparkles size={20} />
          )}
          {loading ? "L'IA écrit pour toi..." : "Message Spécial IA"}
        </motion.button>
      )}

      {message && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-rose-200 shadow-inner mt-4 relative"
        >
          <Heart className="absolute -top-3 -right-3 text-rose-500 fill-rose-500 animate-bounce" size={24} />
          <p className="font-script text-xl sm:text-2xl text-rose-800 leading-relaxed text-center">
            "{message}"
          </p>
          <button 
            onClick={handleGenerate} 
            className="text-xs text-rose-400 mt-4 underline w-full text-center hover:text-rose-600"
          >
            Un autre message ?
          </button>
        </motion.div>
      )}
    </div>
  );
};
