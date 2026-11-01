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

## Shared test application

The template provides a themed application shell, a dashboard at `/`, responsive collapsible navigation and Theme Manager in explicit local `test` mode. Derived test applications add capability-specific scenarios and navigation; they do not need to implement their own application shell.

Open `http://localhost:3000/` for the dashboard or `http://localhost:3000/theme-manager` to exercise Theme Manager. Sidebar sections can be expanded and collapsed, and mobile navigation is overlaid.

This is a **local-only development and test template**. Theme Manager test mode provides unauthenticated management endpoints, so do not publish the template as a public server.

The Theme Manager dependency tracks accepted development `master`; after its revision changes, refresh and commit the dependency lockfile to capture the exact tested commit. Before release adoption, replace the moving Git reference with an immutable release reference.
