<template>
  <div class="background-blur-overlay"></div>
  <main>
    <MainView />
  </main>

  <div class="tc">
        <div onclick="" class="tc-main">
            <img class="tc-img" alt="tc-img" />
        </div>
    </div>

    <div class="cursor-dot" hidden></div>
</template>

<script setup lang="ts">
import MainView from './MainView.vue';


</script>


<style scoped>
.background-blur-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(50px); /* 添加高斯模糊 */
  -webkit-backdrop-filter: blur(50px); /* 兼容性 */
  z-index: -1; /* 确保它在内容之下，但在 body 背景之上 */
}
body {
  font-family: 'a', sans-serif;
  background: url(../assets/wall.webp) no-repeat center center fixed;
  background-size: cover;
  color: #e0e0e0;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden; /* Prevent scrollbar during animation */
  overflow-x: hidden;
  width: 100vw;
  overflow-y: scroll;
  overflow-y: scroll;
}
</style>
