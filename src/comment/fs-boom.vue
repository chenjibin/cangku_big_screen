<template>
  <transition name="fade">
    <div class="boom-component" v-show="visible">
      <video id="video-index" ref="videoDom" autoplay="true" loop="true">
        <source src="https://gw.alipayobjects.com/os/rmsportal/uSTcoTsHGHTJeCzrhiFM.mp4" type="video/mp4" />
      </video>
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
          pre: {
            type: String,
            default: '¥'
          },
          number: {
            type: String,
            default: '0'
          }
        },
        watch: {
          'number'(val) {
            this.$emit('show')
            document.querySelector('#audio').play()

            setTimeout(() => {
              odoo.default({
                el: '.big-number',
                value: this.pre + val,
                animationDelay: 2000
                })
            }, 20)
            setTimeout(() => {
              this.$emit('hide')
              document.querySelector('#audio').pause()
            }, 20000)
          }
        },
        data() {
            return {
              setTime: null
            }
        },
        mounted() {
          this.$refs.videoDom.style.width = 'auto'
          this.$refs.videoDom.style.height = '1080px'
        },
        methods: {
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
