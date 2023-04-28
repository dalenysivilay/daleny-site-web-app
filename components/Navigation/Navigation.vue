<template>
  <nav
    class="flex w-1/2 flex-row items-center justify-between rounded-full bg-white px-6 py-4 shadow-lg"
  >
    <NuxtLink
      to="/"
      class="ml-6 font-acumin-pro text-3xl font-bold text-neutral-800 transition duration-500 hover:text-green-300"
    >
      Daleny
    </NuxtLink>
    <div>
      <NuxtLink
        v-for="links in navigationLinks"
        :to="links.path"
        class="duraiton-500 mr-6 font-fira-sans text-base font-bold text-neutral-800 transition hover:text-green-300"
      >
        {{ links.name }}
      </NuxtLink>
    </div>
  </nav>
</template>
<script lang="ts">
  export default {
    data(): {
      navigationLinks: { name: string; path: string }[];
    } {
      return {
        navigationLinks: [
          {
            name: 'About',
            path: '/about',
          },
          {
            name: 'Projects',
            path: '/projects',
          },
          {
            name: 'Experience',
            path: '/experience',
          },
          {
            name: 'Contact',
            path: '/contact',
          },
        ],
      };
    },
  };
</script>
