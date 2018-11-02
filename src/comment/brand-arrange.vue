<template>
  <div class="brand-arrange">
    <ul class="list" style="list-style: none">
      <template v-for="(item,index) in data" v-if="index <= 4">
        <li class="brand-list-item spec" v-if="index <= 2">
          <div class="flex-box flex-align-center flex-just-space">
            <div class="left-item flex-box flex-align-center">
              <img :src="'http://tm.xyyzi.com:9099/oa/test/image/arrange_' + (index + 1) + '.png'" class="icon"/>
              <div class="img-wrap">
                <img src="http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png"/>
              </div>
              <p class="brand-name">{{item.name}}</p>
            </div>
            <div class="right-item">
              <div class="num">
                <vue-countup class="number" :start="0" :end="+item.amount"></vue-countup>
              </div>
            </div>
          </div>
        </li>
        <li class="brand-list-item" v-else>
          <div class="flex-box flex-just-space flex-align-center">
            <div class="left-item flex-box flex-align-center">
              <span class="tag">{{index + 1}}.</span>
              <p class="brand-name">{{item.name}}</p>
            </div>
            <div class="right-item">
              <div class="num">
                <vue-countup class="number" :start="0" :end="+item.amount"></vue-countup>
              </div>
            </div>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
  import VueCountup from '@/comment/vue-countup'
  export default {
    name: "brand-arrange",
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    components: {VueCountup}
  }
</script>

<style lang="less">
  .brand-list-item {
    padding: 4px 0;
    border-bottom: 1px solid #7411AE;
    .tag {
      margin-right: 4px;
      font-size: 20px;
      color: #fff;
    }
    &.spec {
      .brand-name {
        font-size: 24px;
      }
      .number {
        font-size: 24px;
      }
    }
    .brand-name {
      color: #fff;
      font-size: 20px;
    }
    .number {
      font-size: 20px;
      color: #FFBF00;
    }
    .icon {
      margin-right: 8px;
    }
    .img-wrap {
      margin-right: 12px;
      width: 50px;
      height: 50px;
      padding: 2px;
      background-color: #fff;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
</style>
