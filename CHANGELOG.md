# Changelog

All notable changes to this project will be documented in this file.

## 2026-02-02 v0.0.1

### Added
- Added `DEV_GUIDE.md` with structure review, risks, and recommendations.
- Added `CHANGELOG.md` to track development adjustments.
- Added Vitest config and unit tests for memory migration and stats sorting.

### Changed
- Fixed local date formatting to avoid time zone date drift.
- Updated review stats date range calculations to use local dates.
- Added `react` and `react-dom` to `dependencies` for consistent installs.
- Updated README to clarify React dependencies are included.
- Added `createdAtMs` for stable ID sorting and dedupe.
- Updated review stats dedupe/sort to use `createdAtMs`.
- Updated batch import parsing to reduce sentence mis-splitting.
- Extracted memory state/logic into `useMemoryWords` hook.
- Added `DictionaryPage` and moved dictionary UI out of `App.tsx`.
- Added `ReviewPageContainer` to wrap review rendering.
- Switched dictionary lookup to load `ecdict.csv` at runtime.
- Increased dictionary suggestion limit and made list scrollable.
- Simplified dictionary translations with frequency-aware trimming.
- Applied translation simplification only for sentence translation.
- Added tests for review count thresholds.
- Added tests to verify review counts after dedupe.
- Switched repeat review to extra-review rounds without schedule changes.
- Cleared memory card words when review words are cleared.
- Split completion state from empty-word state in dictionary view.
- Logged current origin during word load to help diagnose storage resets.

## 2026-01-30

### Changed
- Set Vite base to `/` for custom domain deployments.
- Added GitHub Pages workflow to build and deploy `dist`.
- Added `public/CNAME` for custom domain output.

