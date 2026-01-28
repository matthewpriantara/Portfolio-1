
import React from 'react';

interface TerminalWindowProps {
  children: React.ReactNode;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  title?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ 
  children, 
  onClose, 
  onMinimize, 
  onMaximize,
  title = "matt@portfolio:~"
}) => {
  return (
    <div className="flex flex-col w-full h-full max-w-5xl mx-auto shadow-2xl rounded-lg overflow-hidden border border-zinc-800 bg-[#0c0c0c]">
      {/* Window Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-[#1a1a1a] border-b border-zinc-800 select-none">
        <div className="flex space-x-1.5 sm:space-x-2">
          <div onClick={onClose} className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56] cursor-pointer hover:bg-red-600 transition-colors"></div>
          <div onClick={onMinimize} className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e] cursor-pointer hover:bg-yellow-600 transition-colors"></div>
          <div onClick={onMaximize} className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f] cursor-pointer hover:bg-green-600 transition-colors"></div>
        </div>
        <div className="text-zinc-400 text-[10px] sm:text-xs font-mono font-medium truncate px-2 max-w-[150px] sm:max-w-none">
          {title}
        </div>
        <div className="w-8 sm:w-12"></div> {/* Spacer for symmetry */}
      </div>
      
      {/* Terminal Content */}
      <div className="flex-1 overflow-hidden relative">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;
