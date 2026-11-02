<template>
  <span class="inline-flex min-w-0 items-center gap-step-sm">
    <img v-if="brand.logoSrc && !imageFailed" :src="brand.logoSrc" :alt="brand.logoAlt" :class="imageClass" class="shrink-0 rounded-control object-contain" @error="imageFailed = true" />
    <span v-else :class="imageClass" class="grid shrink-0 place-items-center rounded-control border border-edge-primary-default bg-fill-primary-default text-pen-primary-default" aria-hidden="true">◆</span>
    <span v-if="showName" class="min-w-0 truncate font-semibold">{{ brand.name }}</span>
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ showName?: boolean; compact?: boolean }>(), {
  showName: true,
  compact: false,
})
const { testBrand: brand } = useAppConfig()
const imageFailed = ref(false)
const imageClass = computed(() => props.compact ? 'size-8' : 'size-10')
watch(() => brand.logoSrc, () => { imageFailed.value = false })
</script>
