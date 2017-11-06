<template>
  <div class="line-progress-wrapper">
    <div class="line-new"></div>
    <div class="num-line" ref="numLine"></div>
  </div>
</template>
<style lang="less">
  .line-progress-wrapper {
    position: relative;
  .line-new {
    width: 100%;
    height: 1px;
    background-color: rgba(255, 78, 0, 0.6);
  &::before, &::after {
                content: '';
                display: inline-block;
                top: -1px;
                position: absolute;
                width: 3px;
                height: 3px;
                background-color: #ff4e00;
              }
  &::before {
     left: 0;
   }
  &::after {
     right: 0;
   }
  }
  .num-line {
    position: absolute;
    top:-1px;
    left: 6px;
    height: 3px;
    width: 0;
    background-color: #ff4e00;
    transition: width 0.5s ease-in-out;
  }
  }

</style>
<script>
    export default{
        props: {
          percent: {
            type: Number,
            default: 100
          }
        },
        watch: {
          'percent'() {
            this._setLineWidth()
          }
        },
        data() {
            return {
            }
        },
        mounted() {
          setTimeout(() => {
            this._setLineWidth()
          }, 20)
        },
        methods: {
          _setLineWidth() {
            let widthP = Math.floor(this.percent)
            this.$refs.numLine.style.width = 'calc(' + widthP + '% - 3px)'
          }
        }
    }
</script>
