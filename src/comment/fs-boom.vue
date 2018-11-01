<template>
  <transition
   name="custom-classes-transition"
   enter-active-class="animated zoomIn"
   leave-active-class="animated zoomOut"
  >
    <div class="boom-component" v-show="visible">
      <video id="video-index" ref="videoDom" autoplay="true" loop="true">
        <source :src="bgVideoUrl" type="video/mp4" />
      </video>
      <div class="mask flex-box flex-center">
       <transition
        name="custom-classes-transition"
        enter-active-class="animated zoomInDown"
        >
        <div v-show="bigNumShow" class="big-number"></div>
  </transition>
      </div>
      <audio src="http://guider.intersport.net.cn/video/font_fadeInOut.mp3" ref="audioDom"></audio>
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
            default: ''
          },
          number: {
            type: Object,
            default: {}
          },
          bgVideoUrl: {
            type: String
          }
        },
        watch: {
          'number.dis': {
            handler(val) {
            this.$emit('show')
            this.$refs.audioDom.play()
            let textValue = this.toTrand(this.number.val)
            if (this.timeout1) clearTimeout(this.timeout1)
            if (this.timeout2) clearTimeout(this.timeout2)
            this.timeout1 = setTimeout(() => {
              this.bigNumShow = true
              odoo.default({
                el: '.big-number',
                value: this.pre + textValue,
                animationDelay: 3500
                })
            }, 2500)
            this.timeout2 = setTimeout(() => {
              this.$emit('hide')
              this.bigNumShow = false
              this.$refs.audioDom.pause()
            }, 22000)
            }
          }
        },
        data() {
            return {
              bigNumShow: false,
              setTime: null,
              timeout1: null,
              timeout2: null
            }
        },
        mounted() {
          this.$refs.videoDom.style.width = 'auto'
          this.$refs.videoDom.style.height = '1080px'
        },
        methods: {
          toTrand(num) {
            return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
           }
        }
    }
</script>

<style lang="less">
  @font-face{
    font-family: 'ITV Reem';
    src: url(../assets/itv_reem_web-medium.woff) format('woff');
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
        position: relative;
        top: 50px;
        font-family: 'ITV Reem';
        font-size: 140px;
        fill: #ffcc00;
        color: #ffdb6e;
        text-shadow: 2px 4px 20px #ff0036;
      }
    }
  }
</style>
