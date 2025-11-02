<template>
  <div class="container">
    <img class="me-avatar" src="../../assets/static/avatar.png" alt="Avatar" />
    <h3 class="me-name">Yeppioo</h3>
    <p class="me-description">平时喜欢整点新奇玩意，喜欢做点小项目。</p>
    <div class="me-social-links">
      社交链接: <a href="https://github.com/Yeppioo" target="_blank"> GitHub </a> |
      <a href="javascript:void(0)" @click="handleMail"> 邮箱 </a>
    </div>
    <p class="me-info">地理位置: 广东广州</p>
    <p class="me-info">兴趣爱好: 编程开发、网页设计</p>
    <p class="me-info">学习中: Avalonia.Vue.C#</p>
  </div>
</template>

<style scoped>
.me-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.me-info {
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
  text-align: center;
}
.me-name {
  font-family: 'xknl', sans-serif;
  color: #8b5a8c;
  font-size: 28px;
  text-align: center;
  margin-bottom: 10px;
}
.me-description {
  font-size: 14px;
  color: #555;
  text-align: center;
  margin-bottom: 20px;
}

.me-social-links {
  text-align: center;
  margin-bottom: 15px;
  color: #555555;
  font-size: 14px;
}

.me-social-links a {
  color: #8b5a8c;
  text-decoration: none;
  margin: 0 5px;
}
</style>

<script setup lang="ts">
import { inject } from 'vue';
import mail from '../../assets/static/mail.png';

const injectedPop = inject('popFunction') as (imageURL: string) => void;

const handleMail = () => {
  injectedPop(mail);
  window.open('mailto:840673183@qq.com');
};
</script>
