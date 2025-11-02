<template>
  <div class="background-blur-overlay"></div>
  <main>
    <MainView />
  </main>

  <div class="tc" :class="{ active: isTcActive }" @click="pop()">
    <div class="tc-main" :class="{ active: isTcActive }" @click.stop>
      <img class="tc-img" :src="tcImageUrl" alt="tc-img" />
    </div>
  </div>

  <div
    class="cursor-dot"
    :style="{ left: cursorX + 'px', top: cursorY + 'px' }"
    :class="{ active: isActive }"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, provide } from 'vue';
import gsap from 'gsap'; // Import gsap
import MainView from './MainView.vue';

const cursorX = ref(-20);
const cursorY = ref(-20);
const targetX = ref(-20); // New ref for target X
const targetY = ref(-20); // New ref for target Y
const isActive = ref(false);
const isTcActive = ref(false);
const tcImageUrl = ref('');

const handleMouseMove = (e: MouseEvent) => {
  targetX.value = e.clientX - 10 + 1; // Update targetX
  targetY.value = e.clientY - 10 + 1; // Update targetY
};

const animateCursor = () => {
  gsap.to(cursorX, {
    value: targetX.value,
    duration: 0.1,
    ease: 'power2.out',
    onUpdate: () => {},
  });
  gsap.to(cursorY, {
    value: targetY.value,
    duration: 0.1,
    ease: 'power2.out',
    onUpdate: () => {},
  });
  requestAnimationFrame(animateCursor);
};

const handleMouseDown = () => {
  isActive.value = true;
};

const handleMouseUp = () => {
  isActive.value = false;
};

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mouseup', handleMouseUp);
  animateCursor(); // Start the animation loop
});

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mousedown', handleMouseDown);
  document.removeEventListener('mouseup', handleMouseUp);
});
const pop = (imageURL?: string) => {
  if (imageURL) {
    tcImageUrl.value = imageURL;
    isTcActive.value = true;
  } else {
    isTcActive.value = false;
    tcImageUrl.value = '';
  }
};

defineExpose({ pop });
provide('popFunction', pop);
</script>

<style scoped>
.tc {
  position: fixed;

  display: flex;
  visibility: hidden;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: rgba(20, 20, 20, 0.5);
  z-index: 99999;
  align-items: center;
  top: 0;
  justify-content: center;
  flex-direction: column;
}

.tc-main {
  z-index: 100000;

  width: 80%;
  max-width: 300px;
  background-color: #ffffff;
  border-radius: 15px;

  display: flex;
  transition: transform 0.2s linear;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform: translateY(30%) scale(0.5);
}

.tc-img {
  width: 100%;
  height: 100%;
}

.tc.active {
  visibility: visible;
}

.tc-main.active {
  transform: translateY(0) scale(1);
}
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
  background: url(../assets/wall.png) no-repeat center center fixed;
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
.cursor-dot {
  width: 20px;
  height: 20px;
  background-color: rgba(128, 128, 128, 0.5);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 99999999;
  transition: transform 0.1s ease; /* Only keep transform transition for active state */
  left: 0;
  top: 0;
}
.cursor-dot.active {
  transform: scale(0.5);
}
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
}
</style>
