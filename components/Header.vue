<template>
  <header class="bg-white rounded-full shadow-lg my-4 inline-flex">
    <nav class="px-6 py-4">
      <div class="flex items-center">
        <nuxt-link to="/" class="font-noto-sans text-xl font-semibold text-neutral-900 mr-20">
          Daleny
        </nuxt-link>
        <ul class="flex items-center">
          <li>
            <nuxt-link to="/about" class="font-noto-sans text-lg text-neutral-900 hover:text-gray-300 mr-6">
              About
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/projects" class="font-noto-sans text-lg text-neutral-900 hover:text-gray-300 mr-6">
              Projects
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/experience" class="font-noto-sans text-lg text-neutral-900 hover:text-gray-300 mr-6">
              Experience
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact" class="font-noto-sans text-lg text-neutral-900 hover:text-gray-300 mr-6">
              Contact
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
// Add any necessary script setup code here if needed
</script>

<style scoped>
/* No need for additional styles as we're using TailwindCSS */
</style>
