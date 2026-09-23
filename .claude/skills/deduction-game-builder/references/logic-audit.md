# Mystery logic audit checklist

Go through every item; cite the exact line/evidence/timestamp for each finding.

## Timeline
- [ ] Build (or read) the hidden-truth table. Every chat line, log entry and dialogue timestamp matches it.
- [ ] Confessions describe events in an order consistent with logs (a classic bug: "I typed the goodbye message for her" when the message predates her leaving).
- [ ] Sort each log by time; check gaps and overlaps are intentional.

## Hypotheses & elimination
- [ ] Each hypothesis names a concrete act (who did what, when, with what).
- [ ] The eliminating evidence makes *that act* impossible for that suspect — test it by asking "would this evidence also 'clear' the real culprit?" If yes, it's invalid.
- [ ] Eliminating evidence is independent of the suspect's own testimony.
- [ ] At least 2 hypotheses stay open until the investigation phase.

## Evidence
- [ ] Every piece has a plausible in-world source and access permission (who allowed the protagonist to see it).
- [ ] Every piece has exactly one in-game collection point (code-level check too).
- [ ] Physical/technical plausibility (still image vs continuous activity; what a device can actually record; items only where characters went).
- [ ] Two-layer objects: tool use + evidence use are both coherent.

## Culprit's plan
- [ ] The plan is rational for the culprit *as characterised*: every step they rely on has a reason to work (e.g. the victim trusts a fake account only because it contains something only the real person could know).
- [ ] No coincidence rescues the plot (a made-up address that happens to be real, a lucky witness). If something lines up, trace where the culprit got it.
- [ ] Every trace the culprit leaves (signing a log with their real name) is something they were forced to do, and the game shows why.

## Characters
- [ ] No unintended self-contradiction between a character's lines.
- [ ] Characters only know what they could know (e.g. a suspect can't cite a screenshot they never heard of).
- [ ] The protagonist only references facts the player has seen.

## Player agency
- [ ] Key links (who is related to whom, where someone went) are *assembled* by the player from 2+ pieces, never stated by a single record.
- [ ] Each suspect gets at least one beat where suspicion *rises* before it falls (a lie, a suspicious moment) — elimination by a single alibi feels flat.

## Conclusion
- [ ] Every board slot is derivable from evidence available before the board.
- [ ] Wrong options are tempting but refutable.
- [ ] The hook for the next part doesn't contradict the solved case.

## Code-level (mirror of the above)
- [ ] Selecting/presenting evidence is checked for *correctness*, not just *possession*.
- [ ] Each dialogue node references the right evidence id (copy-paste slips are common).
- [ ] Final confrontation requires every evidence its dialogue mentions.

## Worked examples (EH Builder, Part 1)

| Hole | Why it breaks deduction | Fix |
|---|---|---|
| Khang cleared because his cursor moved continuously | The real helper (Đức) also never left his desk — helping was remote | Clear by *device*: the fake message came from a Redmi; Khang uses an iPhone (visible in an earlier screenshot) and was writing on the whiteboard that minute |
| Đức "typed the sleepy message for her", message at 21:34, she left 21:36 | She could have typed it herself; the confession contradicts the log | Victim types "getting water" at 21:34; the sleepy message moves to 21:46, sent from another device |
| Chi says she messaged no one outside the group, but admitted private messages with the victim | Self-contradiction the player will catch | Replace call history with device sync info explaining her phone use at 21:43–44 |
| "Screenshot" proving 7 minutes of activity | A screenshot is one instant | Whiteboard edit history with per-stroke timestamps |
| Motive only revealed in the epilogue | Board slot becomes a guess | Victim's search history found in Chapter 3 + helper's line "she was scared" |

## Worked examples (EH Builder, Part 2 — caught by PersonaTwin review)

| Hole | Caught by | Fix |
|---|---|---|
| A confession-page admin trusts a brand-new fake account | Hardcore reviewer persona | Fake message quotes a sentence that only exists in the private inbox; culprit got it from a screenshot the season's anonymous manipulator sent him |
| Fake address "happens" to be the real family home | Paying-player persona | Address comes from the victim's own old message |
| School record states the sister relation outright | Paying-player persona | Player links a comment by "Kim Ngân" + a festival video frame ("Cổ vũ anh hai") |
| Sister cleared by one video | Hardcore reviewer persona | She lies about going upstairs; the borrow-kiosk log exposes it; her explanation contains a clue pointing at the real culprit |
