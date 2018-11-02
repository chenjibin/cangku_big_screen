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
      height: 10px;
      background-color: rgba(116, 17, 174, 0.3);
    }
    .num-line {
      position: absolute;
      top: 0;
      height: 10px;
      width: 0;
      background-color: #FF0037;
      transition: width 0.5s ease-in-out;
    }
  }

</style>
<script>
  export default {
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
      return {}
    },
    mounted() {
      setTimeout(() => {
        this._setLineWidth()
      }, 20)
    },
    methods: {
      _setLineWidth() {
        let widthP = Math.floor(this.percent)
        this.$refs.numLine.style.width = widthP + '%'
      }
    }
  }
</script>
