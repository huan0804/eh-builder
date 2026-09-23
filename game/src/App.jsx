import { useEffect, useReducer, useState } from 'react';
import ColdOpen from './screens/ColdOpen';
import Prologue from './screens/Prologue';
import Chapter1 from './screens/Chapter1';
import Investigation from './screens/Investigation';
import ThinkingBoard from './screens/ThinkingBoard';
import Epilogue from './screens/Epilogue';
import RecoveryCodeModal from './components/RecoveryCodeModal';
import {
  STAGES,
  initialState,
  gameReducer,
  loadAutosave,
  writeAutosave,
  clearAutosave,
  hasSeenColdOpen,
  markColdOpenSeen,
  getStoredRecoveryCode,
} from './state/gameState';
import { pushSaveToCloud } from './lib/cloudSave';
import { logStageEnter } from './lib/analytics';
import './App.css';

export default function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  // Save đọc MỘT lần lúc mở game; Prologue hiện nút "Chơi tiếp" nếu có
  const [savedGame, setSavedGame] = useState(() => loadAutosave());
  // Cảnh mở đầu season đứng trước cả Prologue, độc lập với STAGES/save — xem gameState.js
  const [coldOpenDone, setColdOpenDone] = useState(false);
  const [coldOpenAlreadySeen] = useState(() => hasSeenColdOpen());

  function finishColdOpen() {
    markColdOpenSeen();
    setColdOpenDone(true);
  }

  // Autosave sau mỗi thay đổi state (kiểu autosave theo passage của SugarCube)
  useEffect(() => {
    writeAutosave(state);
  }, [state]);

  // Đồng bộ cloud tự động: CHỈ khi người chơi đã chủ động lấy mã khôi phục ít
  // nhất 1 lần (xem RecoveryCodeModal mode="get"). Trước đó, không có mã nào để
  // đồng bộ nên hiệu ứng này không làm gì — không gọi RPC nếu không cần thiết.
  useEffect(() => {
    if (state.stage === 'prologue') return;
    if (!getStoredRecoveryCode()) return;
    pushSaveToCloud(state);
  }, [state]);

  // Analytics ẩn danh: ghi nhận mỗi lần vào 1 stage. Tách khỏi effect autosave ở
  // trên để lỗi mạng analytics không bao giờ ảnh hưởng autosave cục bộ.
  useEffect(() => {
    logStageEnter(state.stage);
  }, [state.stage]);

  const [recoveryModalMode, setRecoveryModalMode] = useState(null); // null | 'get' | 'load'

  function loadStateFromCloud(loadedState) {
    dispatch({ type: 'LOAD', state: loadedState });
  }

  const goToNext = () => dispatch({ type: 'NEXT_STAGE' });
  const collectEvidence = (id) => dispatch({ type: 'COLLECT', id });

  function startNew() {
    clearAutosave();
    setSavedGame(null);
    dispatch({ type: 'RESTART' });
    dispatch({ type: 'NEXT_STAGE' });
  }

  function continueGame() {
    dispatch({ type: 'LOAD', state: savedGame });
    setSavedGame(null);
  }

  function restart() {
    clearAutosave();
    dispatch({ type: 'RESTART' });
  }

  const { stage } = state;

  // Cảnh mở đầu season che toàn bộ phần còn lại — không có header/thanh tiến trình,
  // đúng không khí "màn hình đen" của kịch bản (docs/phan-1-script.md mục 1b).
  if (!coldOpenDone) {
    return (
      <div className="game-container">
        <main className="game-main">
          <ColdOpen onDone={finishColdOpen} alreadySeen={coldOpenAlreadySeen} />
        </main>
      </div>
    );
  }

  return (
    <div className="game-container">
      <header className="game-header">
        <h1>🔍 Điều tra viên CLB Ống Kính</h1>
        <span className="progress-badge">
          {STAGES.indexOf(stage) + 1} / {STAGES.length}
        </span>
        {stage !== 'prologue' && (
          <button className="btn-hint" onClick={() => setRecoveryModalMode('get')}>
            ☁️ Lấy mã khôi phục
          </button>
        )}
      </header>

      <main className="game-main">
        {stage === 'prologue' && (
          <Prologue
            onStart={startNew}
            onContinue={savedGame ? continueGame : null}
            onOpenRecovery={() => setRecoveryModalMode('load')}
          />
        )}
        {stage === 'chapter1' && (
          <Chapter1 onCollectEvidence={collectEvidence} onComplete={goToNext} />
        )}
        {stage === 'investigation' && (
          <Investigation state={state} dispatch={dispatch} onComplete={goToNext} />
        )}
        {stage === 'thinkingBoard' && <ThinkingBoard onComplete={goToNext} />}
        {stage === 'epilogue' && (
          <Epilogue onRestart={restart} onOpenRecovery={() => setRecoveryModalMode('get')} />
        )}
      </main>

      {recoveryModalMode && (
        <RecoveryCodeModal
          mode={recoveryModalMode}
          state={state}
          onLoadState={loadStateFromCloud}
          onClose={() => setRecoveryModalMode(null)}
        />
      )}
    </div>
  );
}
