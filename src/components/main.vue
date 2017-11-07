<template>
  <div class="main flex-box flex-center">
    <div class="logo-wrapper">
      <img src="../assets/tm_logo.png" />
    </div>
    <div class="btn-wrapper flex-box">
      <div class="btn" @click="_toTargetWar('warehouse')">
        <img src="../assets/warehouse_btn.png" />
      </div>
      <div class="btn" @click="_toTargetWar('shop')">
        <img src="../assets/shop_btn.png" />
      </div>
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
    width: 60%;
    justify-content: space-around;
    .btn {
      font-size: 0;
      cursor: pointer;
      color: #fff;
    }
  }
}

</style>
