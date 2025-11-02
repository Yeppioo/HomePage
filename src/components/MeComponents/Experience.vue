<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <h3 class="me-history-title">我的历程</h3>
    <div class="me-timeline">
      <div class="me-timeline-item">
        <div class="me-timeline-dot"></div>
        <div class="me-timeline-date">未来可期</div>
        <div class="me-timeline-event">
          <p class="me-timeline-event-title">星辰大海，征途未止</p>
          <p class="me-timeline-event-description">
            代码为舟，梦想为帆，未来无限可能，尽在指尖轻舞。
          </p>
        </div>
      </div>
      <div class="me-timeline-item">
        <div class="me-timeline-dot"></div>
        <div class="me-timeline-date">2025.11</div>
        <div class="me-timeline-event">
          <p class="me-timeline-event-title">拥有专属小天地</p>
          <p class="me-timeline-event-description">
            嘿嘿，我拥有了自己的专属小天地——yik.at域名注册成功啦！未来，这里会记录更多我的奇思妙想和代码故事！
          </p>
        </div>
      </div>
      <div class="me-timeline-item">
        <div class="me-timeline-dot"></div>
        <div class="me-timeline-date">2024.3</div>
        <div class="me-timeline-event">
          <p class="me-timeline-event-title">初次尝试大项目</p>
          <p class="me-timeline-event-description">
            初二下学期，我鼓起勇气，开始捣鼓我的第一个大项目ymcl（虽然它有点小烂尾，但也是我的心血结晶哦！）。链接在这里：<a
              href="https://ymcl.yik.at"
              target="_blank"
              >ymcl.yik.at</a
            >
          </p>
        </div>
      </div>
      <div class="me-timeline-item">
        <div class="me-timeline-dot"></div>
        <div class="me-timeline-date">2023.9</div>
        <div class="me-timeline-event">
          <p class="me-timeline-event-title">桌面开发初体验</p>
          <p class="me-timeline-event-description">
            我遇到了C#，还有酷酷的Avalonia和WPF，桌面开发的大门也向我敞开啦！原来代码还能创造出这么多有趣的东西！
          </p>
        </div>
      </div>
      <div class="me-timeline-item">
        <div class="me-timeline-dot"></div>
        <div class="me-timeline-date">2023.3</div>
        <div class="me-timeline-event">
          <p class="me-timeline-event-title">前端小冒险</p>
          <p class="me-timeline-event-description">
            初中的我，第一次邂逅了前端三件套——HTML、CSS和JavaScript！它们就像魔法棒，让网页变得活泼起来，从此开启了我的前端小冒险！
          </p>
        </div>
      </div>
      <div class="me-timeline-item">
        <div class="me-timeline-dot"></div>
        <div class="me-timeline-date">2016.9</div>
        <div class="me-timeline-event">
          <p class="me-timeline-event-title">成为小学生</p>
          <p class="me-timeline-event-description">
            背上小书包，迈着小短腿，我正式成为一名光荣的小学生啦！知识的海洋，我来啦！
          </p>
        </div>
      </div>
      <div class="me-timeline-item">
        <div class="me-timeline-dot"></div>
        <div class="me-timeline-date">2009.10</div>
        <div class="me-timeline-event">
          <p class="me-timeline-event-title">呱呱坠地</p>
          <p class="me-timeline-event-description">
            小小的我呀，带着好奇的眼睛，呱呱坠地啦！世界，你好呀！
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.me-history-title {
  font-family: 'xknl', sans-serif;
  color: #8b5a8c;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.me-timeline {
  position: relative;
  padding-left: 20px;
  max-height: 278px; /* 可以根据需要调整高度 */
  overflow-y: auto;
}

.me-timeline-item {
  position: relative;
  margin-bottom: 20px;
  padding-left: 20px;
}

.me-timeline-dot {
  position: absolute;
  left: -6px;
  top: 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #8b5a8c;
}

.me-timeline-date {
  font-size: 12px;
  color: #999;
  margin-bottom: 5px;
}

.me-timeline-event-title {
  font-weight: bold;
  color: #333;
  font-family: 'xknl';
  margin-bottom: 5px;
}

.me-timeline-event-description {
  font-size: 13px;
  color: #666;
}
</style>
