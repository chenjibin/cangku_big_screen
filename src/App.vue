<template>
  <div id="app" style="">
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
  name: 'app'
}
</script>

<style lang="less">
* {
  box-sizing: border-box;
}
p, ul {
  margin: 0;
  padding: 0;
}
body,html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  user-select: none;
}
.flex-box {
  display: flex;
}
.flex-center {
  justify-content: center;
  align-items: center;
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
  top:0;
  width: 100%;
  z-index: 100;
  text-align: center;
  img {
    width: 260px;
  }
}
.fs-main-content-router-wrapper {
  position: absolute;
  left:0;
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
