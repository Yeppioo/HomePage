<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="site-container">
    <p class="me-title">
      <svg
        t="1762531203376"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5405">
        <path
          d="M593.94368 715.648a10.688 10.688 0 0 0-14.976 0L424.21568 870.4c-71.68 71.68-192.576 79.232-271.68 0-79.232-79.232-71.616-200 0-271.616l154.752-154.752a10.688 10.688 0 0 0 0-15.04l-52.992-52.992a10.688 10.688 0 0 0-15.04 0L84.50368 530.688a287.872 287.872 0 0 0 0 407.488 288 288 0 0 0 407.488 0l154.752-154.752a10.688 10.688 0 0 0 0-15.04l-52.736-52.736z m344.384-631.168a288.256 288.256 0 0 1 0 407.616l-154.752 154.752a10.688 10.688 0 0 1-15.04 0l-52.992-52.992a10.688 10.688 0 0 1 0-15.104l154.752-154.688c71.68-71.68 79.232-192.448 0-271.68-79.104-79.232-200-71.68-271.68 0L443.92768 307.2a10.688 10.688 0 0 1-15.04 0l-52.864-52.864a10.688 10.688 0 0 1 0-15.04l154.88-154.752a287.872 287.872 0 0 1 407.424 0z m-296.32 240.896l52.672 52.736a10.688 10.688 0 0 1 0 15.04l-301.504 301.44a10.688 10.688 0 0 1-15.04 0l-52.736-52.672a10.688 10.688 0 0 1 0-15.04l301.632-301.504a10.688 10.688 0 0 1 15.04 0z"
          p-id="5406"></path>
      </svg>
      <span class="me-title-text">Sites</span>
    </p>
    <div class="content">
      <div @click="jump(site.host)" v-for="site in sites" :key="site.host" class="site">
        <img class="site-img" :src="site.img" alt="pic" />
        <p class="pp">{{ site.host }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IYik from '@/assets/static/i.yik.at.png';
import LongUrl from '@/assets/static/lu.yik.at.png';
import Aurelio from '@/assets/static/aurelio.yik.at.png';
import Lyra from '@/assets/static/lyra.yik.at.png';
import Ymcl from '@/assets/static/ymcl.yik.at.png';

const sites = [
  {
    host: 'aurelio.yik.at',
    img: Aurelio,
  },
  {
    host: 'i.yik.at',
    img: IYik,
  },
  {
    host: 'lu.yik.at',
    img: LongUrl,
  },
  {
    host: 'lyra.yik.at',
    img: Lyra,
  },
  {
    host: 'ymcl.yik.at',
    img: Ymcl,
  },
];

const jump = (host: string) => {
  window.open(`https://${host}`);
};
</script>
<style scoped>
.pp {
  line-height: 1.6;
  color: #555;
  margin-bottom: 2px;
  margin-top: 2px;
  font-family: 'xknl';
  font-size: 18px;
  font-weight: bold;
}
.content {
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 15px;
}
.site {
  background: #f3f4f6;
  border-radius: 12px;
  display: flex;
  width: 190px;
  flex-direction: column;
  align-items: center;
}
.site-img {
  width: calc(100% - 30px);
  border-radius: 10px;
  margin-top: 14px;
}
.site:hover {
  transform: scale(1.05);
  transition: all 0.2s ease-in-out;
}
.me-title-text {
  color: #8b5a8c;
  font-size: 21px;
  margin-left: 10px;
  font-weight: bold;
  font-family: 'xknl', sans-serif;
  line-height: 1;
}
.me-title svg {
  width: 20px;
  height: 20px;
  fill: #8b5a8c;
}
.me-title {
  display: flex;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
