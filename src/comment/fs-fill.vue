<template>
  <div class="num-fill-component">
    <div class="progress" ref="progress" :title="now">
      <div class="wave-wrapper" style="z-index: 2;">
        <div class="inner">
          <div class="wave wave-one"></div>
          <div class="wave wave-one"></div>
          <div class="wave wave-one"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  @keyframes animateX {
    0 {
      transform: translate3d(0,0,0)
    }
    100% {
      transform: translate3d(-200px,0,0)
    }
  }
  .num-fill-component {
    position: relative;
    width: 100px;
    margin: 0 auto;
    overflow: hidden;
    border:1px solid #0bb79e;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: rgba(10, 2, 47, 0.5);
    .progress {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height:0;
      background-color: rgba(0, 255, 138, 0.7);
      transition: height 0.5s ease-in-out;
      .wave-wrapper {
        position: absolute;
        left: 0;
        top:-10px;
        width: 100px;
        height:10px;
        .inner {
          font-size: 0;
          white-space: nowrap;
          width: 300px;
          &::after {
            content: '';
            display: table;
            clear: both;
          }
        }

      }
      .wave {
        width: 100px;
        height:10px;
        float: left;
        background-repeat: no-repeat;
        background-size: 200% 100%;
        &.wave-one {
          animation: animateX 8s linear infinite normal;
          animation-fill-mode:forwards;
          background-image: url('../assets/green_wave.png');
        }
      }
      &::after {
        content: attr(title);
        display: block;
        position: absolute;
        width: 100%;
        text-align: center;
        top:-30px;
        color: #ff4e00;
        font-weight:700;
        font-size: 18px;
      }
    }
  }
</style>
<script>
    export default{
        props: {
          target: Number,
          now: Number,
          height: {
            type: Number,
            default: 500
          }
        },
        watch: {
          'now'() {
            this._setProgressHeight()
          }
        },
        data() {
            return {

            }
        },
        mounted() {
          this.$el.style.height = this.height + 'px'
          this._setProgressHeight()
        },
        methods: {
          _setProgressHeight() {
            let radio = (this.now / this.target).toFixed(2)
            let eHeight = this.height * radio
            setTimeout(() => {
              this.$refs.progress.style.height = eHeight + 'px'
            }, 20)
          }
        }
    }
</script>
