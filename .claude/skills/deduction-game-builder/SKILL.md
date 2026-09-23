---
name: deduction-game-builder
description: Design, write, audit and build fair-play mystery / detective / deduction games and story-driven browser games (visual novels, interactive fiction, escape-room, "Golden Idol"-like, Ace-Attorney-like interrogation). Use this skill whenever the user works on a mystery case, suspects, clues/evidence, alibis, a timeline, a "thinking board", interrogation dialogue trees, a plot-hole check ("kiểm tra logic vụ án", "cốt truyện có lỗ hổng không"), or on the code of a narrative web game (React/Vite or plain JS) including save/load, dialogue logs and content-as-data — even if they don't say "skill" or "deduction".
---

# Deduction Game Builder

Lessons distilled from auditing and rebuilding a real Vietnamese detective web game (EH Builder, Part 1 "Buổi Livestream Cuối Cùng") and from studying two mature narrative engines: Monogatari (web visual novel engine) and SugarCube 2 (Twine story format). Reply in the user's language (this user works in Vietnamese).

## Core mindsets

1. **Write the hidden truth first, as a minute-by-minute table.** Every clue is a consequence of that truth. If a clue can't be traced to a row in the table, it's a plot hole waiting to happen. Timestamps in dialogue, chat logs and evidence must all agree with this table — check them one by one, it's where most holes hide.
2. **Eliminate a hypothesis by disproving its *action*, not a proxy.** "Suspect X helped the victim hide" is not disproved by "X never left their desk" if the real helper also never left their desk. Ask: *what concrete act would X have had to perform, and what independent evidence makes that act impossible for X?* (device used, hands busy at that exact minute, physically elsewhere).
3. **Always 2–3 live hypotheses in parallel.** Each has a plausible surface alibi, a visible gap, and a distinct evidence set that closes the gap. Never "one question and they're cleared".
4. **Red herrings must have honest resolutions.** A suspicious moment (a log gap, someone picking up their phone) should later be explained by evidence, and the explanation must fit the truth table.
5. **Every conclusion slot must be derivable from evidence the player has *before* the conclusion.** If the motive only appears in the epilogue, the player is guessing, not deducing.
6. **Physical and technical plausibility.** A screenshot is one instant, not seven minutes of activity. Earbuds don't store audio. An item can't appear somewhere the character never went. Prefer logs with timestamps (edit history, access logs, EXIF) for "continuous activity" claims.
7. **Characters must not contradict themselves** unless the contradiction is an intended clue that gets confronted.
8. **Content is data; screens only render.** The case (evidence, sources, dialogue nodes, hypotheses, board slots) lives in one data file. Text hard-coded in components is technical debt for the next case.
9. **Design for how people actually play.** Target players may play in 15-minute bursts on a mid-range phone: keep every evidence card to a one-line summary (details on tap), show instead of explain (a sticker on a PC beats a paragraph about 2FA), and save per chapter.
10. **Verify by playing, not by "it builds".** Run the golden path *and* the wrong moves (wrong evidence, too-early elimination, incomplete sets) with Playwright, and check for console errors.

## Story craft (lessons from Black Myth: Wukong player reviews)

- **Each part stands alone.** Players who lacked the source culture/earlier parts felt lost; open every part with a 2–3 line in-character recap, never a lore dump.
- **Chapters must feel connected.** When chapters feel disconnected, players stop caring about the story. Every part adds exactly one new fact to the season mystery; every chapter ends on a question.
- **Plant a mysterious figure early.** A figure the player can't identify in the opening carries curiosity through the whole game.
- **Protagonist needs a voice and a personal stake.** Players resented a charismatic hero turning into a silent errand-runner. Give the lead a distinctive voice (profession-flavoured vocabulary, inner monologue), a flaw that the confrontation scenes test, and a secret tied to the season mystery.
- **One-sentence theme.** Tie the season to a value the home audience shares (for a Vietnamese school setting: fairness in exams, silence vs. speaking up); every major character is a different answer to it.
- **Optional lore rewards fans; the main case must stand without it.** Leave deliberate gaps in the *season* mystery for fan theories, never in a *case* solution.

## Workflow

1. **Understand the current state**: read the project's notes (e.g. `CLAUDE.md`), story docs, and the case data file before proposing anything.
2. **Audit** with `references/logic-audit.md`. Report findings grouped as *story holes* vs *code bugs*, most serious first, each with the concrete reason it breaks deduction.
3. **Propose a fix that keeps what the author loves** (characters, culprit, hook) and changes only the mechanism. Show the full revised story (truth table + chapter-by-chapter) and get approval before coding.
4. **Encode in data**, then update screens. Keep docs (script) and data in sync in the same change.
5. **Validate**: a case validator (see `references/engine-patterns.md` §5) must pass; deliberately break the data once to prove the validator catches it.
6. **Playtest** golden path + wrong moves + save/reload.
7. **Stress-test the story with personas before building it.** If the PersonaTwin skill is available (https://github.com/datht-work/PersonaTwin-skill), run `/momtest` in Cohort mode with at least: a casual teen on mobile, a player who has paid for deduction games, and a hardcore reviewer. Follow its rules strictly — personas never compliment, answer in past-tense status quo, max 150 words, give Accept/Pivot/Reject with a commitment signal. Map every objection to a concrete fix; remind the user that simulation doesn't replace real playtests.
8. **Record** decisions and bugs-not-to-repeat in the project notes so the next session starts informed.

## Deduction mechanics that work

- **Evidence sets, not collection, clear suspects.** Collecting evidence never auto-eliminates. The player selects a set; valid = contains all `required`, nothing outside `required ∪ allowedExtra`. Wrong sets get a neutral "your argument still has a gap" — never reveal which piece is missing.
- **Interrogation**: presenting evidence must match the next node's `requiresEvidence`; wrong evidence gets an in-character deflection. Elimination unlocks only after the suspect's dialogue is exhausted.
- **Dialogue log**: keep every answer visible. In a deduction game, losing earlier testimony is a design bug.
- **Locked steps**: some evidence is only obtainable after a dialogue node points to it — this makes interviews matter.
- **Hints (e.g. rewarded ads)**: context-aware — point at the first hypothesis not yet eliminated, phrased as a question, never the answer.
- **No free rollback**: undo turns evidence selection into trial-and-error. Allow reviewing, not reverting.

## References

- `references/logic-audit.md` — checklist + worked examples of real holes and their fixes. Read for any story/case review.
- `references/engine-patterns.md` — architecture patterns from Monogatari & SugarCube with ready-to-adapt code (central state, versioned autosave, migrations, validator). Read before touching game code.
