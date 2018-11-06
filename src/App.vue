<template>
  <div id="app" style="">
    <video width="1920"
           height="1080"
           loop="loop"
           @canplay="playVideo"
           :src="videoUrl">您的浏览器不支持播放该视频！
    </video>
    <div class="fs-main-content-router-wrapper">
      <transition
        name="fade"
        mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        videoUrl: ''
      }
    },
    mounted() {
    },
    watch: {
      '$route'(to) {
        if (to.name === 'warehouse') {
          this.videoUrl = 'http://tm.xyyzi.com:9099/oa/test/media/warehouse-bg.mp4'
        } else {
          this.videoUrl = 'http://tm.xyyzi.com:9099/oa/test/media/new-one.mp4'
        }
      }
    },
    methods: {
      playVideo($event) {
        $event.target.play()
      }
    }
  }
</script>

<style lang="less">
  * {
    box-sizing: border-box;
  }
  @font-face{
    font-family: led;
    src: url(./assets/digit.ttf) format('ttf');
  }

  p, ul {
    margin: 0;
    padding: 0;
  }

  body, html {
    position: relative;
    font-size: 0;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    user-select: none;
  }

  .flex-box {
    display: flex;
  }

  .flex-align-center {
    align-items: center;
  }

  .flex-center {
    justify-content: center;
    align-items: center;
  }

  .flex-just-space {
    justify-content: space-between;
  }

  .flex-one {
    flex: 1;
  }

  .flex-two {
    flex: 2;
  }

  #app {
    width: 100%;
    height: 100%;
    font-family: '微软雅黑';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }

  .logo-wrapper {
    padding-top: 40px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 100;
    text-align: center;
    img {
      width: 260px;
    }
  }

  .fs-main-content-router-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }

</style>
