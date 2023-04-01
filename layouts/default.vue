<template>
  <div class="layout-container">
    <Header />
    <main class="page-container">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
</script>

<style>
.layout-container {
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
}

.header {
  padding-left: 2rem;
  padding-right: 2rem;
}

.page-container {
  padding-left: 2rem;
  padding-right: 2rem;
}

/* Add any other global styles here */
</style>