import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Heart } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-onyx border border-gold/40 shadow-[0_0_50px_rgba(192,160,98,0.2)] p-6 md:p-8 rounded-sm text-center"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gold/40 hover:text-gold transition-colors"
            >
              <X size={20} />
            </button>

            <div className="mb-6 flex justify-center">
                <div className="p-3 bg-gold/10 rounded-full border border-gold/20">
                    <Heart className="w-8 h-8 text-gold animate-pulse" />
                </div>
            </div>

            <h3 className="text-2xl text-gold font-heading mb-2 tracking-wider">命运的重逢</h3>
            
            <div className="h-px w-16 bg-gold/30 mx-auto my-4" />

            <p className="text-parchment/80 text-sm leading-relaxed mb-6 font-serif">
              看来您已经多次造访漫宿。<br/>
              如果您喜欢这段旅程，或许愿意为它留下一份见证？
            </p>

            <div className="space-y-3">
                <a 
                    href="https://github.com/luyu14039/Which-hour-will-you-serve" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 border border-gold/30 bg-gold/5 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 font-heading tracking-widest uppercase text-xs group"
                >
                    <Github size={16} className="group-hover:scale-110 transition-transform" />
                    在 GitHub 上点亮星辰
                </a>
                
                <div className="text-xs text-gold/40 pt-2 font-serif italic">
                    或者在小红书 / 小黑盒留下您的足迹
                </div>
            </div>

            <button
                onClick={onClose}
                className="mt-6 text-xs text-gold/30 hover:text-gold/60 transition-colors underline decoration-gold/20 underline-offset-4"
            >
                我已了解，不再提醒
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
