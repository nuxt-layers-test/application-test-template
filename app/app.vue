<template>
  <NuxtRouteAnnouncer />
  <div class="test-shell">
    <aside id="test-navigation" class="test-sidebar" :class="{ 'test-sidebar--collapsed': collapsed, 'test-sidebar--open': mobileOpen }" aria-label="Test application navigation">
      <div class="test-brand">
        <NuxtLink to="/" class="test-brand__title" @click="mobileOpen = false">
          <span class="test-brand__mark" aria-hidden="true">◆</span>
          <span v-if="!collapsed || mobileOpen">Nuxt Layers Test</span>
        </NuxtLink>
        <button class="test-icon-button test-sidebar__collapse" type="button" :aria-label="collapsed ? 'Expand sidebar' : 'Collapse sidebar'" :aria-expanded="!collapsed" @click="collapsed = !collapsed">
          {{ collapsed ? '»' : '«' }}
        </button>
        <button class="test-icon-button test-sidebar__close" type="button" aria-label="Close navigation" @click="mobileOpen = false">×</button>
      </div>
      <nav class="test-nav" aria-label="Capability navigation">
        <NuxtLink to="/" class="test-nav__link" active-class="test-nav__link--active" exact-active-class="test-nav__link--active" @click="mobileOpen = false">
          <span aria-hidden="true">⌂</span><span v-if="!collapsed || mobileOpen">Dashboard</span>
        </NuxtLink>
        <div class="test-nav__section">
          <button type="button" class="test-nav__section-toggle" :aria-expanded="capabilitiesOpen" aria-controls="test-capability-links" @click="capabilitiesOpen = !capabilitiesOpen">
            <span aria-hidden="true">▦</span><span v-if="!collapsed || mobileOpen">Capabilities</span><span v-if="!collapsed || mobileOpen" aria-hidden="true">{{ capabilitiesOpen ? '⌄' : '›' }}</span>
          </button>
          <div v-if="capabilitiesOpen" id="test-capability-links">
            <NuxtLink to="/theme-manager" class="test-nav__link" active-class="test-nav__link--active" @click="mobileOpen = false">
              <span aria-hidden="true">◈</span><span v-if="!collapsed || mobileOpen">Theme Manager</span>
            </NuxtLink>
          </div>
        </div>
      </nav>
      <p v-if="!collapsed || mobileOpen" class="test-sidebar__footer">Local capability testing only</p>
    </aside>
    <button v-if="mobileOpen" class="test-backdrop" type="button" aria-label="Close navigation" @click="mobileOpen = false" />
    <div class="test-content">
      <header class="test-header">
        <button type="button" class="test-icon-button test-mobile-toggle" aria-label="Open navigation" aria-controls="test-navigation" :aria-expanded="mobileOpen" @click="mobileOpen = true">☰</button>
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
.test-shell{display:flex;min-height:100dvh;background:var(--ui-fill-floor-default,#fff);color:var(--ui-pen-base-default,#171717)}
.test-sidebar{position:sticky;top:0;display:flex;flex-direction:column;gap:1rem;width:16rem;min-width:16rem;height:100dvh;padding:1rem;border-right:1px solid var(--ui-edge-base-default,#d1d5db);background:var(--ui-fill-base-default,#f8fafc);transition:width .2s,min-width .2s;z-index:20}
.test-sidebar--collapsed{width:4.5rem;min-width:4.5rem}
.test-brand{display:flex;align-items:center;justify-content:space-between;gap:.5rem;min-height:2.5rem}
.test-brand__title{display:flex;align-items:center;gap:.5rem;color:inherit;text-decoration:none;font-weight:700;white-space:nowrap}
.test-brand__mark{color:var(--ui-pen-primary-default,#0369a1)}
.test-icon-button{border:1px solid var(--ui-edge-base-default,#d1d5db);border-radius:.5rem;background:var(--ui-fill-base-default,#fff);color:inherit;cursor:pointer;padding:.35rem .6rem}
.test-icon-button:focus-visible,.test-nav a:focus-visible,.test-nav button:focus-visible{outline:3px solid var(--ui-edge-base-focus,#2563eb);outline-offset:2px}
.test-nav{display:grid;gap:.4rem}
.test-nav__link,.test-nav__section-toggle{display:flex;width:100%;align-items:center;gap:.7rem;padding:.7rem;border:0;border-radius:.5rem;color:inherit;text-decoration:none;background:transparent;text-align:left;cursor:pointer;white-space:nowrap}
.test-nav__link:hover,.test-nav__section-toggle:hover{background:var(--ui-fill-base-hover,#e2e8f0)}
.test-nav__link--active{background:var(--ui-fill-primary-selected,#dbeafe);font-weight:700}
.test-nav__section-toggle span:last-child{margin-left:auto}
.test-sidebar__footer{margin-top:auto;font-size:.75rem;opacity:.7}
.test-content{flex:1;min-width:0}
.test-header{display:flex;align-items:center;gap:.75rem;min-height:3.75rem;padding:0 1.5rem;border-bottom:1px solid var(--ui-edge-base-default,#d1d5db);font-weight:600}
.test-main{padding:1.5rem}
.test-mobile-toggle,.test-sidebar__close{display:none}
.test-backdrop{display:none}
@media(max-width:700px){
  .test-sidebar{position:fixed;left:0;top:0;transform:translateX(-100%);transition:transform .2s;width:16rem;min-width:16rem}
  .test-sidebar--open{transform:translateX(0)}
  .test-sidebar--open .test-sidebar__collapse{display:none}
  .test-sidebar__close,.test-mobile-toggle{display:inline-flex}
  .test-backdrop{display:block;position:fixed;inset:0;border:0;background:#0008;z-index:10}
  .test-main{padding:1rem}
}
@media(prefers-reduced-motion:reduce){.test-sidebar{transition:none}}
</style>
