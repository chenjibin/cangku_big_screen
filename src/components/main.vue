<template>
  <div class="main flex-box flex-center">
    <div class="btn-wrapper">
      <div class="btn" @click="_toTargetWar('warehouse')">仓库战区</div>
      <div class="btn" @click="_toTargetWar('shop')">店铺战区</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
    }
  },
  methods: {
    _toTargetWar(name) {
      this.$router.push({name: name})
    }
  }
}
</script>

<style scoped lang="less">
.main {
  padding-top: 163px;
  width: 100%;
  height: 100%;
  .btn-wrapper {
    .btn {
      color: #fff;
    }
  }
}

</style>
