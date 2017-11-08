<template>
  <transition name="fade">
    <div class="boom-component" v-show="boomShow">
      <video id="video-index" autoplay="true" loop="true" src="https://gw.alipayobjects.com/os/rmsportal/uSTcoTsHGHTJeCzrhiFM.mp4" poster="https://gw.alipayobjects.com/os/rmsportal/uSTcoTsHGHTJeCzrhiFM.mp4"></video>
      <div class="mask flex-box flex-center">
        <div class="big-number"></div>
      </div>
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
          },
          number: {
            type: String,
            default: '0'
          }
        },
        watch: {
          'number'(val) {
            this.boomShow = true

            setTimeout(() => {
              odoo.default({
                el: '.big-number',
                value: '￥' + val,
                animationDelay: 2000}
              )
            }, 20)
          }
        },
        data() {
            return {
              boomShow: this.visible,
              setTime: null
            }
        },
        mounted() {

        },
        components: {

        }
    }
</script>

<style lang="less">
  @font-face{
    font-family: 'ITV Reem';
    src: url(https://www.itvstatic.com/assets/fonts/reem/itv_reem_web-medium.woff) format('woff');
  }
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
      .big-number {
        font-family: 'ITV Reem';
        font-size: 140px;
        fill: #ffdb6e;
        color: #ffdb6e;
        text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.5);
      }
    }
  }
</style>
