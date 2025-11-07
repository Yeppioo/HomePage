<script setup lang="ts">
import BasicInfo from './MeComponents/BasicInfo.vue';
import Experience from './MeComponents/Experience.vue';
import About from './MeComponents/About.vue';
import Sites from './MeComponents/Sites.vue';
</script>

<template>
  <section class="section-me">
    <div class="me-site-container">
      <Sites />
    </div>
    <div class="me-content-container">
      <div class="me-left-column">
        <BasicInfo />
      </div>
      <div class="me-right-column">
        <Experience />
      </div>
    </div>
    <div class="me-about-container">
      <About />
    </div>
  </section>
</template>

<style scoped>
.section-me {
  width: 100%;
  max-width: 1200px;
  border-radius: 12px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
}

.me-content-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-height: 360px;
  gap: 20px;
}
.me-left-column,
.me-right-column {
  flex: 1;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
}
@media (max-width: 800px) {
  .github-con-container {
    display: none;
  }
  .me-big-title {
    font-size: 20px;
  }
  .me-content-container {
    flex-direction: column;
    max-height: unset;
  }
}
.me-about-container,
.me-site-container {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  width: 100%;
  margin-top: 20px;
}
.me-site-container {
  margin-bottom: 20px;
}
</style>
