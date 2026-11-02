export default defineNuxtPlugin(() => {
  const { preference } = useTestColourMode()
  applyTestColourMode(preference.value)
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const update = () => {
    if (preference.value === 'system') applyTestColourMode('system')
  }
  media.addEventListener('change', update)
  return {
    hooks: {
      'app:beforeUnmount': () => media.removeEventListener('change', update),
    },
  }
})
