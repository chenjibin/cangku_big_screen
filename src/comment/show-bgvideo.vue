<template>
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div class="show-bg-video" v-show="visible">
        <video id="video-index" @canplay="playVideo" @pause="stopVideo" :src="bgVideoUrl">您的浏览器不支持播放该视频！</video>
      </div>
    </transition>
</template>

<script>
  export default {
    name: "show-bgvideo",
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      nowNum: {
        type: Number,
        default: 0
      },
      bgVideoPreUrl: {
        type: String,
        default: ''
      },
      numArr: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        bigNumShow: false,
        timeout1: null,
        bgVideoUrl: '',
        numArrStore: this.numArr
      }
    },
    watch: {
      'nowNum': {
        handler(val) {
          this.isShowBgVideo(val)
        }
      }
    },
    methods: {
      playVideo($event) {
        this.$emit('update:visible', true)
        $event.target.play()
      },
      stopVideo() {
        setTimeout(() => {
          this.bgVideoUrl = ''
        }, 1000)
        this.$emit('update:visible', false)
      },
      isShowBgVideo(val) {
        const {numArrStore, bgVideoPreUrl} = this
        const numArrStoreLen = numArrStore.length
        if (!numArrStoreLen) return
        for(let i = 0; i < numArrStoreLen; i++) {
          let flag = val >=  numArrStore[i]
          if (flag) {
            const picNum = numArrStore[i] / 10000
            this.numArrStore.splice(i)
            // this.bgVideoUrl = `file:///G:/big_screen_video/sale_${picNum}.mp4`
            this.bgVideoUrl = `${bgVideoPreUrl}sale_${picNum}.mp4`
            // this.bgVideoUrl = `${bgVideoPreUrl}sale_500.mp4`
            break
          }
        }
      }
    }
  }
</script>

<style lang="less">
  .show-bg-video {
    position: fixed;
    z-index: 1000;
    left: 0;
    top:0;
    width: 1920px;
    height:1080px;
    #video-index {
      width: 1920px;
      height:1080px;
    }
  }
</style>
