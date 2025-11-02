<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h2 class="me-big-title">关于我 (●'◡'●)</h2>
  <GithubActivity />
  <Skills />
  <Educate />
</template>

<script setup lang="ts">
import GithubActivity from './GithubActivity.vue';
import Educate from './Educate.vue';
import Skills from './Skills.vue';
</script>

<style scoped>
.me-big-title {
  font-family: 'xknl', sans-serif;
  color: #8b5a8c;
  font-size: 26px;
  margin-top: 3px;
  text-align: center;
}
</style>
