# Cortex — milestone 1

A mobile-first coding training shell built with Expo SDK 57, React Native, TypeScript, and Expo Router. The campaign is NeetCode / LeetCode.

## Run locally

Use Node 24 LTS (the tested version is 24.11.0) and npm.

```sh
npm ci
npm start
```

Open with an SDK 57-compatible Expo Go installation or development build. `npm run ios` requires an installed iOS simulator/Xcode; `npm run android` requires an Android emulator or connected device. `npm run web` opens the browser preview.

## Implemented scope

- TRAIN: time-aware greeting, overall coding level, today's Arrays & Hashing workout, estimated duration, START WORKOUT, current topic level, and Monday–Sunday activity.
- LEARN and YOU: intentional Coming Soon screens describing the future features.
- `/workout`: a preview explaining that the engine comes next milestone. Entering it creates no session and changes no progress. BACK TO TRAIN also works when the route is opened directly.
- System light/dark appearance, safe-area spacing, scrollable phone layouts, accessible button/tab labels, and shared typography and color tokens.

There is no backend, authentication, storage, workout engine, question content, feed, progress editing, or integration. All progress is a clearly defined initial mock state: level 1 and zero completed workouts. Template launcher assets remain placeholders.

## Architecture

Routes in `src/app` are thin entry points. Feature components live in `src/features`; reusable UI and colors live in `src/components` and `src/theme`.

`TrainingRepository.getOverview(date)` is the asynchronous read boundary. The current adapter uses `src/data/mockTraining.ts`; feature components never import those fixtures. A future storage implementation can replace this adapter without rewriting the screens. The hook handles loading, retry, and unmount cancellation without global state. No persistence is needed for this read-only milestone.

Domain records define `UserProgress`, `SkillProgress`, `Topic`, `WorkoutPlan`, `WorkoutSession`, `WorkoutQuestion`, and `WorkoutSummary`. IDs and ISO timestamp strings are suitable for later persistence. These are foundational types, not a finalized database schema. The activity helper groups completion timestamps using the device's local calendar and handles Monday-based weeks across year and daylight-saving boundaries.

Expo Router supplies the root stack and three bottom tabs. The workout route sits outside the tabs so the real session flow can be added independently. Shared UI uses React Native primitives; web support is a review surface for the mobile application.

The package overrides pin Router's automatically installed optional Reanimated/Worklets dependencies to the versions in Expo SDK 57's `bundledNativeModules.json`. No animation engine is used by the feature code. This avoids npm resolving newer optional peers incompatible with the SDK.

## File inventory

All files are new in the initially empty repository:

```text
app.json                        Expo config, scheme, themes, typed routes
package.json / package-lock.json Dependencies and development commands
tsconfig.json                   Strict TypeScript and @/ source alias
eslint.config.js                Expo flat ESLint configuration
.gitignore                      Dependencies, generated output, native builds
AGENTS.md / LICENSE              Official Expo template instructions/license
assets/                         Official Expo template launcher assets
src/app/
  _layout.tsx                   Root stack and status bar
  (tabs)/_layout.tsx             TRAIN / LEARN / YOU navigation
  (tabs)/index.tsx               TRAIN entry point
  (tabs)/learn.tsx               LEARN entry point
  (tabs)/you.tsx                 YOU entry point
  workout.tsx                   Workout preview entry point
  +not-found.tsx                 Unknown-route recovery
src/components/
  BrandHeader.tsx / Icon.tsx
  PrimaryButton.tsx / Screen.tsx / Typography.tsx
src/domain/
  training.ts                   Foundational data contracts
  activity.ts                   Local calendar activity projection
src/data/
  mockTraining.ts               Initial fixtures
  trainingRepository.ts         Read boundary and mock adapter
src/features/train/
  TrainScreen.tsx / WorkoutCard.tsx / WeeklyActivity.tsx
  useTrainingOverview.ts        Async view state
src/features/coming-soon/ComingSoonScreen.tsx
src/features/workout/WorkoutPlaceholderScreen.tsx
src/theme/theme.ts              Light/dark tokens
tests/activity.test.ts          Calendar boundary regression tests
README.md                       Setup, architecture, and verification
```

The unused template `App.tsx`, `index.ts`, and Claude-specific plugin setting were removed when adopting Expo Router.

## Verification

```sh
npm run typecheck
npm run lint
TZ=America/New_York npm test
npx expo install --check
npx expo-doctor
EXPO_NO_TELEMETRY=1 npx expo export --platform all
EXPO_NO_TELEMETRY=1 npx expo start --web --localhost --port 8081 --clear
npm audit
```

- TypeScript and ESLint pass.
- Three calendar tests pass: year-boundary Sunday, local completion dates with duplicate sessions, and daylight-saving week.
- Expo Doctor: 21/21 checks pass; Expo dependency versions pass validation.
- Production JavaScript/Hermes bundles export for iOS, Android, and web. This is not an installed native binary test.
- Browser preview launches at 390 × 844 and 375 × 667. Verified all three tabs, START WORKOUT, workout direct-route reload, BACK TO TRAIN, unchanged initial progress, small-screen scrolling, and no horizontal page overflow. Reviewed the system dark appearance visually. No browser console errors or warnings were observed during the final interaction checks.

## Warnings and remaining validation

- An iOS simulator is not available here (`xcrun simctl` is unavailable); native iOS/Android device execution, native safe areas, screen-reader behavior, and larger system font sizes still need a device smoke test. Light tokens are implemented but the browser visual checks used the host's dark appearance.
- `npm audit` reports **32 dependency advisories: 23 high and 9 moderate**, including propagated findings through the Expo/Metro dependency tree. Root advisory packages include `braces`, `node-forge`, `uuid`, and `decode-uri-component`. A normal `npm audit fix` was attempted; the remaining recommendations include incompatible major changes or no compatible fix. No forced upgrade, downgrade, or unverified security override was applied. Revisit with a supported SDK dependency update before release.
- npm reports deprecations for transitive `uuid` and the SDK-compatible ESLint 9 version. Metro also emitted an environment-only `NO_COLOR` / `FORCE_COLOR` warning during bundling.

## Next milestone

Implement one complete local Arrays & Hashing workout: a small reviewed question set, session state, completion, and a summary behind the existing repository boundary. Keep LEARN and YOU as ghost screens until that training loop is validated.

No commits or pushes have been made.
