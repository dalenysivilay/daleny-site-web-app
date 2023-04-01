<template>
  <header class="bg-gray-800">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <ul class="flex items-center">
          <li>
            <nuxt-link to="/" class="text-lg text-gray-100 hover:text-gray-300 mr-6">
              About
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/projects" class="text-lg text-gray-100 hover:text-gray-300 mr-6">
              Projects
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/experience" class="text-lg text-gray-100 hover:text-gray-300 mr-6">
              Experience
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact" class="text-lg text-gray-100 hover:text-gray-300 mr-6">
              Contact
            </nuxt-link>
          </li>
        </ul>
        <div class="flex items-center">
          <nuxt-link to="/" class="text-xl font-semibold text-gray-100">
            Daleny
          </nuxt-link>
        </div>
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