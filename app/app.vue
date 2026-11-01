<template>
  <NuxtRouteAnnouncer />
  <div class="test-shell bg-fill-floor-default text-pen-floor-default">
    <aside id="test-navigation" class="test-sidebar border-edge-base-default bg-fill-base-default text-pen-base-default" :class="{ 'test-sidebar--collapsed': collapsed, 'test-sidebar--open': mobileOpen }" aria-label="Test application navigation">
      <div class="test-brand">
        <NuxtLink to="/" class="test-brand__title" @click="mobileOpen = false">
          <span class="test-brand__mark text-pen-primary-default" aria-hidden="true">◆</span>
          <span v-if="!collapsed || mobileOpen">Nuxt Layers Test</span>
        </NuxtLink>
        <button class="test-icon-button test-sidebar__collapse border-edge-base-default bg-fill-base-default text-pen-base-default hover:border-edge-base-hover hover:bg-fill-base-hover hover:text-pen-base-hover focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-edge-base-focus" type="button" :aria-label="collapsed ? 'Expand sidebar' : 'Collapse sidebar'" :aria-expanded="!collapsed" @click="collapsed = !collapsed">
          {{ collapsed ? '»' : '«' }}
        </button>
        <button class="test-icon-button test-sidebar__close border-edge-base-default bg-fill-base-default text-pen-base-default hover:border-edge-base-hover hover:bg-fill-base-hover hover:text-pen-base-hover focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-edge-base-focus" type="button" aria-label="Close navigation" @click="mobileOpen = false">×</button>
      </div>
      <nav class="test-nav" aria-label="Capability navigation">
        <NuxtLink to="/" class="test-nav__link text-pen-base-default hover:bg-fill-base-hover hover:text-pen-base-hover focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-edge-base-focus" active-class="test-nav__link--active bg-fill-primary-selected text-pen-primary-selected border-edge-primary-selected" exact-active-class="test-nav__link--active bg-fill-primary-selected text-pen-primary-selected border-edge-primary-selected" @click="mobileOpen = false">
          <span aria-hidden="true">⌂</span><span v-if="!collapsed || mobileOpen">Dashboard</span>
        </NuxtLink>
        <div class="test-nav__section">
          <button type="button" class="test-nav__section-toggle text-pen-base-default hover:bg-fill-base-hover hover:text-pen-base-hover focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-edge-base-focus" :aria-expanded="capabilitiesOpen" aria-controls="test-capability-links" @click="capabilitiesOpen = !capabilitiesOpen">
            <span aria-hidden="true">▦</span><span v-if="!collapsed || mobileOpen">Capabilities</span><span v-if="!collapsed || mobileOpen" aria-hidden="true">{{ capabilitiesOpen ? '⌄' : '›' }}</span>
          </button>
          <div v-if="capabilitiesOpen" id="test-capability-links">
            <NuxtLink to="/theme-manager" class="test-nav__link text-pen-base-default hover:bg-fill-base-hover hover:text-pen-base-hover focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-edge-base-focus" active-class="test-nav__link--active bg-fill-primary-selected text-pen-primary-selected border-edge-primary-selected" @click="mobileOpen = false">
              <span aria-hidden="true">◈</span><span v-if="!collapsed || mobileOpen">Theme Manager</span>
            </NuxtLink>
          </div>
        </div>
      </nav>
      <p v-if="!collapsed || mobileOpen" class="test-sidebar__footer text-caption text-pen-muted-default">Local capability testing only</p>
    </aside>
    <button v-if="mobileOpen" class="test-backdrop bg-fill-floor-default/70" type="button" aria-label="Close navigation" @click="mobileOpen = false" />
    <div class="test-content">
      <header class="test-header border-edge-base-default bg-fill-base-default text-pen-base-default">
        <button type="button" class="test-icon-button test-mobile-toggle border-edge-base-default bg-fill-base-default text-pen-base-default hover:border-edge-base-hover hover:bg-fill-base-hover hover:text-pen-base-hover focus-visible:outline-focus focus-visible:outline-offset-focus focus-visible:outline-edge-base-focus" aria-label="Open navigation" aria-controls="test-navigation" :aria-expanded="mobileOpen" @click="mobileOpen = true">☰</button>
        <span>Application Test Template</span>
      </header>
      <main id="main-content" class="test-main">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const collapsed = ref(false)
const mobileOpen = ref(false)
const capabilitiesOpen = ref(true)
</script>

<style>
/* Layout mechanics remain here; theme presentation belongs to Theme Manager utilities. */
.test-shell{display:flex;min-height:100dvh}
.test-sidebar{position:sticky;top:0;display:flex;flex-direction:column;gap:var(--ui-step-md);width:16rem;min-width:16rem;height:100dvh;padding:var(--ui-step-md);border-right-width:1px;transition:width .2s,min-width .2s;z-index:20}
.test-sidebar--collapsed{width:4.5rem;min-width:4.5rem}
.test-brand{display:flex;align-items:center;justify-content:space-between;gap:var(--ui-step-xs);min-height:2.5rem}
.test-brand__title{display:flex;align-items:center;gap:var(--ui-step-xs);color:inherit;text-decoration:none;font-weight:700;white-space:nowrap}
.test-icon-button{border-width:1px;border-radius:var(--ui-radius-control);cursor:pointer;padding:var(--ui-step-2xs) var(--ui-step-xs)}
.test-nav{display:grid;gap:var(--ui-step-2xs)}
.test-nav__link,.test-nav__section-toggle{display:flex;width:100%;align-items:center;gap:var(--ui-step-sm);padding:var(--ui-step-sm);border-width:1px;border-color:transparent;border-radius:var(--ui-radius-control);text-decoration:none;text-align:left;cursor:pointer;white-space:nowrap}
.test-nav__section-toggle span:last-child{margin-left:auto}
.test-sidebar__footer{margin-top:auto}
.test-content{flex:1;min-width:0}
.test-header{display:flex;align-items:center;gap:var(--ui-step-sm);min-height:3.75rem;padding:0 var(--ui-step-lg);border-bottom-width:1px;font-weight:600}
.test-main{padding:var(--ui-step-lg)}
.test-mobile-toggle,.test-sidebar__close{display:none}
.test-backdrop{display:none}
@media(max-width:700px){
  .test-sidebar{position:fixed;left:0;top:0;transform:translateX(-100%);transition:transform .2s;width:16rem;min-width:16rem}
  .test-sidebar--open{transform:translateX(0)}
  .test-sidebar--open .test-sidebar__collapse{display:none}
  .test-sidebar__close,.test-mobile-toggle{display:inline-flex}
  .test-backdrop{display:block;position:fixed;inset:0;border:0;opacity:.7;z-index:10}
  .test-main{padding:var(--ui-step-md)}
}
@media(prefers-reduced-motion:reduce){.test-sidebar{transition:none}}
</style>