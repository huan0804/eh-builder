# Engine patterns (from Monogatari & SugarCube 2)

Both engines are mature open-source narrative engines. We borrow their architecture, not the engines.

## 1. How they structure a story
- **Monogatari**: `script = { LabelName: [statement, statement, ...] }`. Each statement is handled by an *Action* class with `apply()` and `revert()` plus lifecycle hooks (`onStart`, `onSave`, `onLoad`, `reset`). Characters, assets and `storage` (story variables with defaults) are declared separately.
- **SugarCube**: named *passages* with tags; special passages (`StoryInit` for variable defaults, `PassageReady`/`PassageDone` hooks). Story variables (`$x`, saved) vs temporary variables (`_x`, not saved). Each turn pushes a *moment* (snapshot of variables) to a capped history (`Config.history.maxStates`); `visited()`/`hasPlayed()` query it.

**Takeaway**: one declarative content file + a small engine that interprets it; saved state separated from UI-temporary state; named lifecycle hooks.

## 2. Central, serializable state (React)
- One plain-JSON object for everything that must survive a reload (stage, collected evidence, dialogue history per character, eliminated hypotheses, flags). No functions, Sets, Maps or class instances.
- Change it only through a reducer with named events (`COLLECT`, `ADVANCE_NODE`, `ELIMINATE`, `NEXT_STAGE`, `LOAD`, `RESTART`).
- Keep UI-only state (current selection, toasts, open modals) in components.
- Store dialogue progress as a *history array of node ids* (like SugarCube moments), not an index — gives you the dialogue log for free.

## 3. Versioned autosave (both engines do this)
```js
export const SAVE_KEY = 'game:case1:autosave';
export const SAVE_VERSION = 1;
const MIGRATIONS = { /* 1: (state) => ({ ...state, newField: default }) */ };

function migrate({ version, state }) {
  while (version < SAVE_VERSION) {
    if (!MIGRATIONS[version]) return null;   // can't upgrade → drop save, never crash
    state = MIGRATIONS[version](state); version += 1;
  }
  return version === SAVE_VERSION ? state : null; // saves from a *newer* build are dropped too
}
export function loadAutosave() {
  try { const raw = localStorage.getItem(SAVE_KEY); if (!raw) return null;
        const s = migrate(JSON.parse(raw)); return isValidState(s) ? s : null; }
  catch { return null; }                      // corrupted JSON, storage blocked (incognito, portal iframes)
}
export function writeAutosave(state) {
  try { if (state.stage === 'prologue') return; // don't overwrite a save before a new run starts
        localStorage.setItem(SAVE_KEY, JSON.stringify({ version: SAVE_VERSION, savedAt: Date.now(), state })); }
  catch { /* game stays playable without saving */ }
}
```
- Autosave after every state change (`useEffect([state])`); offer "Continue" on the title screen.
- Always validate the shape of a loaded save (`isValidState`) — localStorage can be edited or stale.
- Changing the state shape = bump `SAVE_VERSION` + add a migration (Monogatari keeps dated files in `migrations/`; SugarCube uses `Config.saves.version` + `Save.onLoad`).
- Test: fresh start shows no Continue; reload mid-game restores; corrupted JSON and future versions are ignored without errors.

## 4. Content as data
Put in the case file, not in JSX: characters, chat logs, evidence (id, name, description), evidence *sources* (which chapter/step yields each), interview nodes (`prompt`, `reply`, `requiresEvidence`, `unlocksNext`, `unlocksEvidenceStep`, `isFinalConfession`), hypotheses (`requiredToEliminate`, `allowedExtra`, `eliminationText`), confrontation set, board slots + labels, epilogue. Screens read the data; a new case = a new data file.

## 5. Case validator (like Monogatari's FancyError, but at build time)
A Node script run by `npm run validate` and chained before `vite build`. Checks:
1. Every evidence id referenced anywhere exists.
2. Every evidence has exactly one collection source.
3. Dialogue: first node is `intro`, every `unlocksNext` exists, every node is reachable, every locked step is unlocked by some node.
4. Hypothesis/confrontation sets reference real evidence, no id both required and optional, ≥2 eliminable hypotheses.
5. Board: correct answer is among options; every option has a label.
6. Logs are in chronological order.
Prove it works by breaking the data once and seeing it fail.

## 6. Worth adding later
Settings stored separately from saves (text speed, font size, reduced motion); `onSave`/`onLoad` hooks for portal SDK cloud saves; i18n string tables; per-chapter asset preload; a debug mode that jumps to any chapter with a preset evidence kit.

## 7. Don't copy
Free rollback/undo (breaks deduction), a custom markup/macro language (too heavy for a 1–2 person team — JS objects + validator suffice).
