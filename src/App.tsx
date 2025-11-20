import React, { useState } from 'react';
import { GiftBox } from './components/GiftBox';
import { MainCard } from './components/MainCard';

const App: React.FC = () => {
  const [hasOpened, setHasOpened] = useState(false);
  const targetDate = new Date('2026-02-27T00:00:00');

  const handleGiftOpened = () => {
    setHasOpened(true);
  };

  return (
    <div className="min-h-screen bg-rose-50 font-sans text-gray-800 overflow-x-hidden">
      {!hasOpened ? (
        <GiftBox onOpenComplete={handleGiftOpened} />
      ) : (
        <MainCard tripDate={targetDate} />
      )}
    </div>
  );
};

export default App;
