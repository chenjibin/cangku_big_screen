<template>
  <ul class="common-arrange-list">
    <template v-for="item,index in arrangeData" v-if="index <= 4">
      <li class="list-item spec" v-if="index <= 2">
        <div class="flex-box flex-align-center flex-just-space">
          <div class="left-item flex-box flex-align-center">
            <img :src="'http://tm.xyyzi.com:9099/oa/test/image/arrange_' + (index + 1) + '.png'" class="icon"/>
            <div class="img-wrap">
              <img :src="'http://tm.xyyzi.com:9099/oa/test/image/jiangpai_' + (index + 1) + '.jpg'"/>
            </div>
            <p class="shop-name">{{item.name}}</p>
          </div>
          <div class="right-item flex-box">
            <div class="num">
              <vue-countup class="number" :start="0" :end="+item.num"></vue-countup>
            </div>
          </div>
        </div>
      </li>
      <li class="list-item" v-else>
        <div class="flex-box flex-just-space">
          <div class="flex-box flex-align-center">
            <span class="tag">{{index + 1}}.</span>
            <p class="shop-name">{{item.name}}</p>
          </div>
          <div class="">
            <vue-countup class="number small" :start="0" :end="+item.num"></vue-countup>
          </div>
        </div>
      </li>
    </template>
  </ul>
</template>

<script>
  import VueCountup from '@/comment/vue-countup'
  export default {
    name: "common-arrange",
    props: {
      arrangeData: {
        type: Array,
        default: () => []
      }
    },
    components: {VueCountup}
  }
</script>

<style lang="less">
  .common-arrange-list {
    list-style: none;
    .list-item {
      padding: 10px 0;
      border-bottom: 1px solid #7411AE;
      .shop-name {
        font-size: 24px;
        color: #fff;
        width: 220px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .tag {
        margin-right: 2px;
        font-size: 24px;
        color: #fff;
      }
      .number {
        font-size: 36px;
        color: #FFBF00;
        font-weight: 700;
        &.small {
          font-size: 30px;
        }
      }
      .left-item {
        position: relative;
        margin-right: 20px;
        font-size: 0;
        .icon {
          position: absolute;
          left: -12px;
          top: -12px;
        }
      }
      .img-wrap {
        margin-right: 12px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #fff;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      &.spec {
        padding-left: 12px;
      }
    }
  }
</style>
