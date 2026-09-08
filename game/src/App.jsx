import { useState } from 'react';
import Prologue from './screens/Prologue';
import Chapter1 from './screens/Chapter1';
import Investigation from './screens/Investigation';
import ThinkingBoard from './screens/ThinkingBoard';
import Epilogue from './screens/Epilogue';
import './App.css';

const STAGES = ['prologue', 'chapter1', 'investigation', 'thinkingBoard', 'epilogue'];

export default function App() {
  const [stage, setStage] = useState('prologue');
  const [collectedIds, setCollectedIds] = useState([]);

  function collectEvidence(id) {
    setCollectedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }

  function goToNext() {
    const idx = STAGES.indexOf(stage);
    setStage(STAGES[idx + 1] ?? STAGES[STAGES.length - 1]);
  }

  function restart() {
    setCollectedIds([]);
    setStage('prologue');
  }

  return (
    <div className="game-container">
      <header className="game-header">
        <h1>🔍 Điều tra viên CLB Ống Kính</h1>
        <span className="progress-badge">
          {STAGES.indexOf(stage) + 1} / {STAGES.length}
        </span>
      </header>

      <main className="game-main">
        {stage === 'prologue' && <Prologue onStart={goToNext} />}
        {stage === 'chapter1' && (
          <Chapter1 onCollectEvidence={collectEvidence} onComplete={goToNext} />
        )}
        {stage === 'investigation' && (
          <Investigation
            collectedIds={collectedIds}
            onCollectEvidence={collectEvidence}
            onComplete={goToNext}
          />
        )}
        {stage === 'thinkingBoard' && <ThinkingBoard onComplete={goToNext} />}
        {stage === 'epilogue' && <Epilogue onRestart={restart} />}
      </main>
    </div>
  );
}
