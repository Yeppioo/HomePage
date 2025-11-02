<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="edu-container">
    <p class="me-title">
      <svg
        t="1762050963415"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="10806"
        width="32"
        height="32">
        <path
          d="M1016.96 362.666667L512 34.432 7.04 362.666667 512 690.858667l341.333333-221.866667V682.666667h85.333334V413.568L1016.96 362.666667z"
          p-id="10807"></path>
        <path
          d="M213.333333 746.666667v-156.373334l298.666667 194.133334 298.666667-194.133334V746.666667c0 62.72-43.264 111.573333-96.128 142.421333C660.608 920.576 588.885333 938.666667 512 938.666667s-148.565333-18.090667-202.538667-49.578667C256.597333 858.24 213.333333 809.386667 213.333333 746.666667z"
          p-id="10808"></path>
      </svg>
      <span class="me-title-text">教育背景</span>
    </p>
    <div class="edu-container">
      <div class="edu-item" style="margin-top: 20px">
        <div class="edu-title">
          <p class="edu-title-text">高中进行时</p>
          <p class="edu-title-time">2025 - 至今</p>
        </div>
        <div class="edu-content">
          <p>
            现在，我已经是高中生啦！学习的挑战也越来越大，但我会继续加油的！每天都在努力吸收新知识，期待未来能成为一个闪闪发光的人！
          </p>
        </div>
      </div>
      <div class="edu-item" style="margin-top: 20px">
        <div class="edu-title">
          <p class="edu-title-text">初中生活</p>
          <p class="edu-title-time">2022 - 2025</p>
        </div>
        <div class="edu-content">
          <p>
            小学毕业后，我带着一点点小紧张和更多的好奇心，进入了初中。这里的课程变得更有趣了，也认识了好多新朋友！虽然有时候会遇到小难题，但大家一起努力，都变得更棒啦！
          </p>
        </div>
      </div>
      <div class="edu-item">
        <div class="edu-title">
          <p class="edu-title-text">小学时光</p>
          <p class="edu-title-time">2016 - 2022</p>
        </div>
        <div class="edu-content">
          <p>
            2016年，我背着小书包，蹦蹦跳跳地踏入了小学的校门，开启了我的学习之旅！那里的老师和同学们都超级可爱，我们一起学习、一起玩耍，度过了六年快乐的时光呢！
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.edu-item {
  background-color: #faf5ff;
  border-radius: 12px;
  padding: 15px;
  margin-top: 20px;
}
.edu-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.edu-title-text {
  color: #1f2937;
  font-family: 'xknl';
  font-size: 18px;
  font-weight: bold;
}
.edu-title-time {
  color: #6b7280;
  margin-right: 6px;
  font-size: 14px;
}
.edu-content p {
  color: #6d6d6d;
  font-size: 15px;
  font-family: 'xknl', sans-serif;
}
.edu-content {
  margin-top: 6px;
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
.edu-container {
  margin-top: 20px;
}
</style>
