<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import Button from '~/components/ui/button/Button.vue'
import { isDark, toggleDark } from '~/composables/dark'
</script>

<template>
  <header class="h-16 w-full border-b border-gray-200 bg-white dark:border-gray-900 dark:bg-dark-500">
    <Toaster position="top-right" rich-colors close-button />
    <div class="h-full flex items-center gap-x-4 px-4">
      <div class="text-xl font-bold">
        Web alarm samples
      </div>
      <div class="flex-1" />
      <Button
        class="border border-gray-300 rounded-md bg-white px-2 transition-colors duration-200 dark:border-gray-500 dark:bg-white hover:bg-gray-200 dark:hover:bg-gray-300"
        @click="toggleDark()"
      >
        <i v-if="isDark" class="i-carbon-moon text-xl text-gray-800" />
        <i v-else class="i-carbon-sun text-xl text-gray-800" />
      </Button>
      <Button
        variant="outline" as="a" href="https://github.com/lemonnekogh/flow-chat"
        class="aspect-square w-10 px-unset dark:bg-white dark:hover:bg-primary/90"
      >
        <span class="i-carbon-logo-github" />
      </Button>
    </div>
  </header>
</template>

<style>
#app {
  height: 100dvh;
  display: flex;
  flex-direction: column;
}
*:focus,
*:focus-visible {
  outline: none !important;
}
.i-carbon-logo-github {
  @apply dark:bg-black;
}
</style>
