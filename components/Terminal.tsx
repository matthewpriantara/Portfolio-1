
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { PORTFOLIO_DATA, COMMANDS } from '../constants';

interface TerminalProps {
  onSwitchToVisual: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ onSwitchToVisual }) => {
  const [history, setHistory] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Welcome to Matthew's Terminal Portfolio.\nType 'help' to see available commands or select a menu below.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const processCommand = (cmd: string) => {
    const normalizedCmd = cmd.trim().toLowerCase();
    let response = "";

    // Standard control commands
    if (normalizedCmd === 'help') {
      response = `Available commands:\n- help\n- clear\n- Personal Information\n- Education\n- Personal Skills\n- Organizational Experience\n- Work Experience\n- Project Highlights\n- View Full Portfolio`;
    } else if (normalizedCmd === 'clear') {
      setHistory([]);
      return;
    } 
    // Portfolio specific commands
    else if (normalizedCmd === 'personal information') {
      response = PORTFOLIO_DATA.personalInfo;
    } else if (normalizedCmd === 'education') {
      response = PORTFOLIO_DATA.education.map(item => `- ${item}`).join('\n');
    } else if (normalizedCmd === 'personal skills') {
      response = PORTFOLIO_DATA.skills.map(s => `* ${s.title}\n  ${s.description}`).join('\n\n');
    } else if (normalizedCmd === 'organizational experience') {
      response = PORTFOLIO_DATA.organizationalExperience.map(o => `* ${o.title} (${o.period})\n  ${o.description}`).join('\n\n');
    } else if (normalizedCmd === 'work experience') {
      response = PORTFOLIO_DATA.workExperience.map(w => `* ${w.title} (${w.period})\n  ${w.description}`).join('\n\n');
    } else if (normalizedCmd === 'project highlights') {
      response = PORTFOLIO_DATA.projectHighlights.map(p => `* ${p.title} (${p.role})${p.achievement ? ` - ${p.achievement}` : ''}\n  ${p.description}`).join('\n\n');
    } else if (normalizedCmd === 'view full portfolio') {
      onSwitchToVisual();
      return;
    } else {
      response = "Command not supported yet, IZINNN 🫷🏻";
    }

    const assistantMsg: Message = {
      id: Date.now().toString(),
      role: 'assistant',
      content: response,
      timestamp: new Date()
    };
    setHistory(prev => [...prev, assistantMsg]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setHistory(prev => [...prev, userMsg]);
    processCommand(input);
    setInput('');
  };

  const handleRecommendationClick = (rec: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: rec,
      timestamp: new Date()
    };
    setHistory(prev => [...prev, userMsg]);
    processCommand(rec);
  };

  return (
    <div className="flex flex-col h-full bg-[#0c0c0c] text-[#d1d1d1] font-mono text-[13px] sm:text-base p-3 sm:p-5">
      {/* History Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto space-y-4 mb-4 scrollbar-thin scrollbar-thumb-zinc-700 pr-1"
      >
        {history.map((msg) => (
          <div key={msg.id} className="flex flex-col">
            <div className="flex items-center space-x-2 mb-1">
              <span className={msg.role === 'user' ? "text-[#27c93f]" : "text-[#ffbd2e]"}>
                {msg.role === 'user' ? '➜ guest:' : '➜ matthew:'}
              </span>
              <span className="text-zinc-600 text-[10px] sm:text-xs">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            <div className="whitespace-pre-wrap pl-3 sm:pl-4 border-l border-zinc-800 ml-1 leading-relaxed">
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Recommendations Chips */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
        {COMMANDS.map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleRecommendationClick(cmd)}
            className={`px-2.5 py-1 border rounded-full text-[10px] sm:text-xs transition-all transform hover:scale-105 active:scale-95 ${
              cmd === 'View Full Portfolio' 
              ? 'bg-blue-900/20 border-blue-800/50 text-blue-400 hover:text-blue-300' 
              : 'bg-[#1a1a1a] border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="flex items-center space-x-2 border-t border-zinc-800 pt-3 sm:pt-4">
        <span className="text-[#27c93f] font-bold text-[13px] sm:text-base shrink-0">guest:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-[#d1d1d1] focus:ring-0 p-0 placeholder-zinc-700 text-[13px] sm:text-base min-w-0"
          placeholder="Type command..."
          autoFocus
        />
      </form>
    </div>
  );
};

export default Terminal;
