<template>
  <main>
    <div class="flex justify-center">
      <Header />
    </div>
    <div class="min-h-screen flex flex-col justify-center mx-auto px-8">
      <slot />
    </div>
  </main>
</template>

<script setup>
</script>

<style>
/* No need for additional styles as we're using TailwindCSS */
</style>
