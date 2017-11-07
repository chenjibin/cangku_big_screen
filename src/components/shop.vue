<template>
  <div class="shop flex-box">
    <div class="flex-one left-area">
      <div class="spec-block-one">
        <p class="time">{{updateTime}}</p>
        <div class="line-one"></div>
        <div class="line-two"></div>
      </div>
      <div class="spec-block-two flex-box">
        <img src="../assets/sale_left.png" />
        <p class="desc">今日支付总金额</p>
        <div class="line-one"></div>
        <div class="line-two"></div>
      </div>
      <div class="main-block">
        <div class="list-block one">
          <p class="title">今日实时各店铺支付金额排行榜</p>
          <div class="line"></div>
          <ul class="list">
            <li v-for="item,index in sendOrder" class="item flex-box" :class="{good: index <= 2}">
              <p class="order">{{index + 1}}</p>
              <p class="flex-one">{{item.name}}</p>
              <p class="flex-one">{{item.num}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="center-area">
      <div class="number-block">
        <vue-countup class="number" :start="saleData.start" :end="saleData.end"></vue-countup>
      </div>

    </div>
    <div class="flex-one right-area">
      <div class="spec-block flex-box">
        <p class="title">天马集团全渠道实时销售数据</p>
        <div class="line-one"></div>
        <div class="line-two"></div>
      </div>
      <div class="main-block">
        <div class="table-line-block each-block">
          <p class="title">完成发货速率(1小时)</p>
          <div class="line"></div>
          <div class="line-table">
            <vue-echarts :options="polar" :auto-resize="true"></vue-echarts>
          </div>
        </div>
        <div class="piv-order-block each-block">
          <p class="title">顾客发货地域分布(省份)</p>
          <div class="line"></div>
          <div class="area-block">
            <div class="each-area" v-for="item,index in provinceData">
              <div class="desc flex-box">
                <span class="name">{{item.name}}</span>
                <span class="num">{{item.percent + '%'}}</span>
              </div>
              <fs-lineprogress :percent="index === 0 ? 100 : item.percent/provinceData[0].percent*100"></fs-lineprogress>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as moment from 'moment'
  import VueEcharts from 'vue-echarts'
  import VueCountup from '@/comment/vue-countup'
  import FsFill from '@/comment/fs-fill'
  import FsLineprogress from '@/comment/fs-lineprogress'

  export default {
    name: 'warehouse',
    data () {
      return {
        saleData: {
          start: 0,
          end: 0
        },
        nowMoney: 1500000,
        shopData: [
          {
            name: '幸运叶子官方旗舰店',
            money: 500000
          }
        ],
        updateTime: '0000-00-00 00:00:00',
        provinceData: [
          {
            name: '江苏省',
            percent: 10.14
          },
          {
            name: '浙江省',
            percent: 8.28
          },
          {
            name: '广东省',
            percent: 8.28
          },
          {
            name: '北京市',
            percent: 5.38
          },
          {
            name: '山东省',
            percent: 2.09
          }
        ],
        saleRadioData: {
          name: '1218108080',
          value: ['2017-11-11 10:50:26', 20]
        },
        allSaleData: {
          name: '1218108080',
          value: ['2017-11-11 10:50:26', 20]
        },
        sendOrder: [
          {
            name: '徐青',
            num: '100,000'
          },
          {
            name: '徐青',
            num: '100,000'
          },
          {
            name: '徐青',
            num: '100,000'
          },
          {
            name: '徐青',
            num: '100,000'
          },
          {
            name: '徐青',
            num: '100,000'
          },
          {
            name: '徐青',
            num: '100,000'
          },
          {
            name: '徐青',
            num: '100,000'
          },
          {
            name: '徐青',
            num: '100,000'
          },
          {
            name: '徐青',
            num: '100,000'
          },
          {
            name: '徐青',
            num: '100,000'
          }
        ],
        sendRadio: [2, 7, 10, 18, 14, 18, 20, 30, 10, 18, 33, 24, 20, 19, 39],
        polar: {
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '0',
            top: '6',
            width: '400px',
            height: '230px',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: '#4e7eff'
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(78, 126, 255, 0.5)'
              }
            },
            nameTextStyle: {
              color: 'rgb(255,255,255)'
            },
            data: ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00']
          },
          yAxis: {
            type: 'value',
            nameTextStyle: {
              color: 'rgb(255,255,255)'
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#4e7eff'
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(78, 126, 255, 0.5)'
              }
            }
          },
          series: [
            {
              name: '完成发货速率',
              type: 'line',
              stack: '总量',
              lineStyle: {
                normal: {
                  color: '#ffd702'
                }
              },
              data: []
            }
          ]
        }
      }
    },
    created() {
      this.polar.series[0].data = this.sendRadio
    },
    mounted() {
      setInterval(() => {
        let nowTime = moment().format('YYYY-MM-DD hh:mm:ss')
        this.saleData.end += 1000
        this.updateTime = nowTime
      }, 1000)
    },
    methods: {
      getWarehouseData() {
        this.$http.get('').then((res) => {
          if (res) {
          }
        })
      }
    },
    components: {
      VueEcharts,
      VueCountup,
      FsFill,
      FsLineprogress
    }
  }
</script>

<style  lang="less">
  .shop {
    padding-top: 127px;
    width: 100%;
    height: 100%;
    background-image: url(../assets/all_sale_bg.jpg);
    .left-area {
      .spec-block-one,.spec-block-two {
        position: relative;
      }
      .spec-block-one {
        margin-top: 40px;
        margin-bottom: 60px;
        .line-one {
          position: absolute;
          top: 24px;
          left: 96px;
          width: 180px;
          height: 1px;
          background-color: rgba(78, 126, 255, 0.80);
          &::before {
            content: '';
            display: inline-block;
            position: absolute;
            left:0;
            top: 0px;
            width: 114px;
            height: 1px;
            background-color: #ff4e00
          }
          &::after {
            content: '';
            display: inline-block;
            position: absolute;
            top: -2px;
            right: 0;
            width: 5px;
            height: 5px;
            background-color: #ff4e00
          }
        }
        .line-two {
          position: absolute;
          top: 40px;
          left: 0;
          width: 75px;
          height: 1px;
          background-color: rgba(78, 126, 255, 0.80);
          &::after {
            content: '';
            display: inline-block;
            position: absolute;
            right: -24px;
            top: -8px;
            width: 26px;
            height: 1px;
            background-color: rgba(78, 126, 255, 0.80);
            transform: rotateZ(141deg);
          }
        }
      }
      .spec-block-two {
        position: absolute;
        left: 20px;
        top:0;
        align-items: baseline;
        .desc {
          margin-left: 6px;
          position: relative;
          top: -46px;
        }
        img {
          width: 400px;
        }
        .line-one {
          position: absolute;
          top: 64px;
          left: 270px;
          width: 150px;
          height: 1px;
          background-color: rgba(78, 126, 255, 0.80);
          &::before{
            content: '';
            display: inline-block;
            position: absolute;
            top: -2px;
            left: 0;
            width: 5px;
            height: 5px;
            background-color: #ff4e00
          }
          &::after {
            content: '';
            display: inline-block;
            position: absolute;
            right: -109px;
            top: 57px;
            width: 140px;
            height: 1px;
            background-color: rgba(78, 126, 255, 0.8);
            transform: rotateZ(55deg);
          }
        }
        .line-two {
          position: absolute;
          top: 179px;
          left: 500px;
          width: 100px;
          height: 1px;
          background-color: rgba(78, 126, 255, 0.80);
          &::after {
            content: '';
            display: inline-block;
            position: absolute;
            top: -2px;
            width: 5px;
            height: 5px;
            background-color: #ff4e00
          }
          &::after {
            right: 0;
          }

        }
      }

      .time {
        padding-left: 100px;
      }
      .time, .desc {
        font-size: 16px;
        color: #fff;
        font-weight: 700;
      }
      .main-block {
        position: relative;
        .list-block {
          position: absolute;
          padding: 16px;
          width: 423px;
          height: 613px;
          background-image: url(../assets/shop-order.png);
          background-size: contain;
          background-repeat: no-repeat;
          &.one {
            left: 100px;
          }
          &.two {
            left: 320px;
            top:50px;;
          }
          .title {
            font-weight: 700;
            color: #ff4e00;
            margin-bottom: 10px;
            font-size: 20px;
          }
          .list {
            margin-top: 20px;
            color: #fff;
            .item {
              padding: 6px 0;
              align-items: center;
              border-bottom: 1px solid #ff4e00;
              font-size: 16px;
              &.good {
                border-bottom: 1px solid #ffd702;
                .order {
                  color: #ffd702;
                }
              }
              .order {
                width: 30px;
                flex: 0 0 30px;
                color: #ff4e00;
              }

            }
          }
          .line {
            position: relative;
            width: 100%;
            height: 1px;
            background-color: rgba(78, 126, 255, 0.80);
            &::before,&::after {
              content: '';
              display: inline-block;
              position: absolute;
              top: -2px;
              width: 5px;
              height: 5px;
              background-color: #ff4e00
            }
            &::before {
              left: 0;
            }
            &::after {
              right: 0;
            }
          }
        }
      }
    }
    .center-area {
      width: 700px;
      flex: 0 0 700px;
      text-align: center;
      .number-block {
        margin: 40px auto 0 auto;
        width: 85%;
        .number {
          font-family: initial;
          font-weight: 700;
          text-align: center;
          background: -webkit-linear-gradient(bottom,#ff4e00,#ffd702);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: #ff4e00;
          font-size: 70px;
        }
        .line {
          margin: 4px 0;
          position: relative;
          width: 100%;
          height: 1px;
          background-color: rgba(78, 126, 255, 0.80);
          &::before,&::after {
            content: '';
            display: inline-block;
            position: absolute;
            top: -2px;
            width: 5px;
            height: 5px;
            background-color: #ff4e00
          }
          &::before {
            left: 0;
          }
          &::after {
            right: 0;
          }
        }
        .desc {
          color: #ff4e00;
          font-size: 16px;
          font-weight: 700;
        }
      }
    }
    .right-area {
      .spec-block {
        position: relative;
        margin-left: 50px;
        margin-bottom: 30px;
        align-items: baseline;
        font-size: 16px;
        font-weight: 700;
        color: #fff;
        img {
          width: 80px;
        }
        .title {
          margin-left: 10px;
        }
        .line-one {
          position: absolute;
          top: 30px;
          left: -13px;
          width: 280px;
          height: 1px;
          background-color: rgba(78, 126, 255, 0.8);
          &::before {
            content: '';
            display: inline-block;
            position: absolute;
            left:0;
            top: 0px;
            width: 114px;
            height: 1px;
            background-color: #ff4e00
          }
          &::after {
            content: '';
            display: inline-block;
            position: absolute;
            top: -2px;
            left: 0;
            width: 5px;
            height: 5px;
            background-color: #ff4e00
          }
        }
        .line-two {
          position: absolute;
          top: 49px;
          left: 290px;
          width: 400px;
          height: 1px;
          background-color: rgba(78, 126, 255, 0.80);
          &::after {
            content: '';
            display: inline-block;
            position: absolute;
            left: -26px;
            top: -10px;
            width: 30px;
            height: 1px;
            background-color: rgba(78, 126, 255, 0.8);
            transform: rotateZ(40deg);
          }
        }
      }
      .main-block {
        margin-left: 40px;
        .each-block {
          padding: 16px;
          width: 440px;
          height: 318px;
          background-image: url('../assets/right-two.png');
          background-size: contain;
          background-repeat: no-repeat;
          .title {
            font-weight: 700;
            color: #fff;
            margin-bottom: 10px;

          }
          .line {
            position: relative;
            width: 158px;
            height: 1px;
            background-color: rgba(78, 126, 255, 0.80);
            &::before,&::after {
              content: '';
              display: inline-block;
              position: absolute;
              top: -2px;
              width: 5px;
              height: 5px;
              background-color: #ff4e00;
            }
            &::before {
              left: 0;
            }
            &::after {
              right: 0;
            }
          }
        }
        .table-line-block {
          margin-bottom: 30px;
          .line-table {
            margin-top: 20px;
            width: 100%;
            height:250px;
          }

        }
        .piv-order-block {
          .line {
            width: 180px;
          }
          .area-block {
            margin-top: 30px;
            .each-area {
              padding: 10px 0 0 0;
            }
            .desc {
              margin-bottom: 6px;
              justify-content: space-between;
              color: #fff;
              .name {

              }
              .num {

              }
            }
          }
        }
      }

    }
  }

</style>
