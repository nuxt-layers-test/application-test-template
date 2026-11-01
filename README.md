# Application Test Template

> **In short:** a minimal Nuxt application template for independent capability acceptance and presentation testing in the Nuxt Layers ecosystem.

## Purpose

Use GitHub's **Use this template** action to create a separate test application for a capability. Each generated repository owns its capability dependencies, server-side composition, scenarios, fixtures and acceptance results. The template owns no capability-specific implementation.

## Getting started

Install the Node.js version declared in `.node-version`, select it with `fnm use`, and use the pnpm version declared in `package.json`. From the generated project:

```powershell
pnpm install --frozen-lockfile
pnpm dev
```

The local development server defaults to `http://localhost:3000`.

## Boundaries

- Consume a capability only through its published `CONTRACT.md` and public exports.
- Keep capability behaviour, administrative screens and server-side enforcement in their owning capability.
- Configure application navigation, fixtures and test scenarios in each derived repository.
- Consume Theme Manager's public semantic vocabulary; do not define another theme system.
- Use British English, accessible interaction and Nuxt's built-in internationalisation-friendly primitives.

The initial repository contains the official minimal Nuxt application. A shared test dashboard and navigation shell will be introduced after validation in an independent capability test application.

## Theme Manager acceptance branch

This branch temporarily composes the Theme Manager test mode for **isolated local testing only**. It is not the reusable, capability-neutral template baseline. Test mode is intentionally unauthenticated; never deploy this branch publicly.

With Node.js 26.13.0 and pnpm 12.16.1, refresh the dependency lockfile from the current Theme Manager `master`, then run the local development server. Open `http://localhost:3000/theme-manager` and verify the complete create, edit, save, select, preview and delete workflow. Restart the server and confirm the test store resets.

The dependency is deliberately Git-backed during active development. Commit the regenerated `pnpm-lock.yaml` to this branch before treating its pull request as merge-ready.
