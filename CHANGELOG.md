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

