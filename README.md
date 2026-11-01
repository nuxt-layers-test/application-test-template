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
