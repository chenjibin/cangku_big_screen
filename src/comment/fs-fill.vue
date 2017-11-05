<template>
  <div class="num-fill-component">
    <div class="progress" ref="progress"></div>
  </div>
</template>
<style lang="less">
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
      background-color: rgba(11, 183, 158, 0.8);
      transition: height 0.5s ease-in-out;
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
              this.$refs.progress.style.height = eHeight * radio + 'px'
            }, 20)
          }
        }
    }
</script>
