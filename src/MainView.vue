<template>
  <main class="container">
    <TitleSection />
    <MeSection />
  </main>
</template>
<script setup lang="ts">
import TitleSection from './components/TitleSection.vue';
import MeSection from './components/MeSection.vue';
</script>
<style scoped>
main {
  max-width: 1200px;
  width: 100%;
  padding: 20px;
}
</style>
