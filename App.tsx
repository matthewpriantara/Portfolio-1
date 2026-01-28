
import React, { useState } from 'react';
import Terminal from './components/Terminal';
import TerminalWindow from './components/TerminalWindow';
import FullPortfolio from './components/FullPortfolio';
import { ViewMode } from './types';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('terminal');

  const handleSwitchToVisual = () => {
    setViewMode('visual');
  };

  const handleSwitchToTerminal = () => {
    setViewMode('terminal');
  };

  if (viewMode === 'visual') {
    return <FullPortfolio onBack={handleSwitchToTerminal} />;
  }

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-3 sm:p-6 md:p-8">
      {/* Background patterns */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-500/10 blur-[80px] sm:blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-500/10 blur-[80px] sm:blur-[120px] rounded-full"></div>
      </div>

      <div className="w-full h-[90vh] sm:h-[85vh] max-h-[850px] z-10 flex flex-col animate-in fade-in zoom-in duration-500">
        <TerminalWindow 
          onClose={() => alert("Terminal session ended.")}
          onMaximize={handleSwitchToVisual}
          title="matthew@portfolio: ~ (bash)"
        >
          <Terminal onSwitchToVisual={handleSwitchToVisual} />
        </TerminalWindow>
        
        <div className="mt-4 sm:mt-8 text-center text-zinc-600 text-[9px] sm:text-xs font-mono uppercase tracking-[0.2em] opacity-50 sm:opacity-100">
          Welcome to Matthew Priantara's Terminal Portfolio
        </div>
      </div>
    </div>
  );
};

export default App;
