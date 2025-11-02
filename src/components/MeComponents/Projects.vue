<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <p class="me-title">
      <svg
        t="1762054408500"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="10095"
        width="32"
        height="32">
        <path
          d="M395.765333 586.570667h-171.733333c-22.421333 0-37.888-22.442667-29.909333-43.381334L364.768 95.274667A32 32 0 0 1 394.666667 74.666667h287.957333c22.72 0 38.208 23.018667 29.632 44.064l-99.36 243.882666h187.050667c27.509333 0 42.186667 32.426667 24.042666 53.098667l-458.602666 522.56c-22.293333 25.408-63.626667 3.392-54.976-29.28l85.354666-322.421333z"
          p-id="10096"></path>
      </svg>
      <span class="me-title-text">主要项目</span>
    </p>

    <div class="projects">
      <div @click="open('https://lyra.yik.at/')" class="project-card project-card-blue">
        <div class="project-content">
          <h3 class="project-title">Lyra</h3>
          <p class="project-description">
            基于Vue的静态音乐播放器, 使用网易云音乐api, 支持搜索音乐/查看歌手/评论等功能
          </p>
        </div>
        <div class="project-tags">
          <span class="tag" style="background-color: #dbfef4; color: #3caf76">Vue.js</span>
          <span class="tag" style="background-color: #ffedd5; color: #9a3412">Pinia</span>
          <span class="tag" style="background-color: #dbeafe; color: #3c40af">TypeScript</span>
        </div>
      </div>
      <div @click="open('https://ymcl.yik.at/')" class="project-card project-card-green">
        <div class="project-content">
          <h3 class="project-title">Yu minecraft Launcher</h3>
          <p class="project-description">
            一个跨平台 Minecraft 启动器，支持 Windows, MacOS, Linux 等操作系统
          </p>
        </div>
        <div class="project-tags">
          <span class="tag" style="background-color: #fedbdb; color: #af3c3c">Avalonia</span>
          <span class="tag" style="background-color: #dbeafe; color: #3c40af">.NET Core</span>
          <span class="tag" style="background-color: #f3e8ff; color: #6b21a8">C#</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 20px;
}
.me-title-text {
  color: #8b5a8c;
  font-size: 21px;
  margin-left: 10px;
  font-weight: bold;
  font-family: 'xknl', sans-serif;
  line-height: 1;
  margin-top: 3px;
}
.me-title svg {
  width: 24px;
  height: 24px;
  fill: #8b5a8c;
}
.me-title {
  display: flex;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.project-card {
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  font-family: 'xknl', sans-serif;
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-card-blue {
  background-color: #eef3ff; /* Light blue background */
  border: #dbeafe solid 1px;
}

.project-card-green {
  background-color: #edfdf4; /* Light green background */
  border: #dcfce7 solid 1px;
}

.project-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  line-height: 1;
  font-family: 'xknl', sans-serif;
}

.project-description {
  font-size: 15px;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.5;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: bold;
}
</style>
<script setup lang="ts">
const open = (url: string) => {
  window.open(url);
};
</script>
