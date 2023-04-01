<template>
  <header class="header">
    <nav class="navbar">
      <ul class="nav-links">
        <li>
          <nuxt-link to="/" class="nav-link">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/projects" class="nav-link">Projects</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/experience" class="nav-link">Experience</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
        </li>
      </ul>
      <div class="logo-container">
        <nuxt-link to="/" class="logo">Daleny</nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
// Add any necessary script setup code here if needed
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #222;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #f0f0f0;
}

.logo-container {
  margin-left: 1rem;
}

.logo {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
}
</style>