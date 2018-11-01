<template>
  <div class="fs-swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <ul class="list">
          <template v-for="item,index in shopData" v-if="index <= 4">
            <li class="list-item spec" v-if="index <= 2">
              <div class="flex-box flex-align-center">
                <div class="left-item">
                  <img :src="'http://tm.xyyzi.com:9099/oa/test/image/arrange_' + (index + 1) + '.png'" class="icon"/>
                  <div class="img-wrap">
                    <img src="http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png"/>
                  </div>
                </div>
                <div class="right-item flex-one">
                  <p class="shop-name">{{item.name}}</p>
                  <div class="num">
                    <vue-countup class="number" :start="0" :end="item.money"></vue-countup>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-item" v-else>
              <div class="flex-box flex-just-space">
                <div class="flex-box">
                  <span class="tag">{{index + 1}}.</span>
                  <p class="shop-name">{{item.name}}</p>
                </div>
                <div class="">
                  <vue-countup class="number small" :start="0" :end="item.money"></vue-countup>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul class="list">
          <template v-for="item,index in shopData" v-if="index > 4 && index <= 11">
            <li class="list-item">
              <div class="flex-box flex-just-space">
                <div class="flex-box">
                  <span class="tag">{{index + 1}}.</span>
                  <p class="shop-name">{{item.name}}</p>
                </div>
                <div class="">
                  <vue-countup class="number small" :start="0" :end="item.money"></vue-countup>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<style lang="less">
  .fs-swiper {
    .list-item {
      padding: 20px 0;
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
        font-size: 45px;
        color: #FFBF00;
        font-weight: 700;
        &.small {
          font-size: 24px;
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
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #fff;
        padding: 2px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      &.spec {
        padding: 30px 0 20px 20px;

      }
    }

  }
</style>
<script>
  import VueCountup from '@/comment/vue-countup'
  export default {
    name: 'shop-arrange',
    props: {
      shopData: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        swiperOption: {
          effect: 'flip',
          speed:600,
          autoplay:{
            delay: 10000
          }
        }
      }
    },
    components: {VueCountup}
  }
</script>
