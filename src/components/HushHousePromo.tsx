import React from 'react';
import { ExternalLink, Book } from 'lucide-react';

export const HushHousePromo: React.FC<{ className?: string }> = ({ className = '' }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      e.preventDefault();
      alert('Hush House 暂不支持移动端访问，请使用桌面浏览器体验最佳效果。\n\n地址：https://luyu14039.github.io/Hush-House/');
    }
  };

  return (
    <div className={`w-full max-w-2xl mx-auto mt-12 p-6 border border-gold/20 bg-onyx/40 backdrop-blur-sm rounded-sm relative group overflow-hidden ${className}`}>
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold/40" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold/40" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold/40" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold/40" />

      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="p-4 bg-gold/5 rounded-full border border-gold/10 group-hover:border-gold/30 transition-colors">
          <Book className="w-8 h-8 text-gold/80" />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-gold font-heading text-lg tracking-wider mb-2 flex items-center justify-center md:justify-start gap-2">
            Hush House / 噤声书屋
            <span className="text-[10px] px-2 py-0.5 border border-gold/20 rounded text-gold/60 font-sans tracking-normal">PC Only</span>
          </h4>
          <p className="text-parchment/60 text-sm font-serif leading-relaxed mb-4">
            基于 LLM 数据提炼的《密教模拟器》与《司辰之书》沉浸式可视化阅读器与知识图谱。
            在这里，你可以更直观地探索那些被隐藏的历史与秘密。
          </p>
          
          <a 
            href="https://luyu14039.github.io/Hush-House/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="inline-flex items-center gap-2 text-xs text-gold hover:text-gold/80 transition-colors border-b border-gold/20 hover:border-gold pb-0.5 font-heading tracking-widest uppercase"
          >
            <span>前往书屋</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};
