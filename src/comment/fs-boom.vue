<template>
  <transition>
    <div class="boom-component" v-if="boomShow">
      <video id="video-index" autoplay="true" loop="true" src="https://gw.alipayobjects.com/os/rmsportal/uSTcoTsHGHTJeCzrhiFM.mp4" poster="https://gw.alipayobjects.com/os/rmsportal/uSTcoTsHGHTJeCzrhiFM.mp4"></video>
      <div class="mask"></div>
    </div>
  </transition>

</template>

<script>
    export default {
        props: {
          visible: {
            type: Boolean,
            default: false
          },
          time: {
            type: Number,
            default: 1000
          }
        },
        watch: {
          'visible'(val) {
            console.log(val)
            this.boomShow = val
          }
        },
        data() {
            return {
              boomShow: this.visible

            }
        },
        mounted() {

        },
        components: {

        }
    }
</script>

<style lang="less">
  .boom-component {
    position: fixed;
    z-index: 1000;
    left: 0;
    top:0;
    width: 100%;
    height:100%;
    #video-index {
      display: inline-block;
      vertical-align: baseline;
      width: 100%;
      height:100%;
    }
    .mask {
      position: absolute;
      z-index: 100;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
