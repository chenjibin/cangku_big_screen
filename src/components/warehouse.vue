<template>
  <div class="warehouse flex-box">
    <div class="flex-one left-area">
      <div class="spec-block-one">
        <p class="time">数据更新时间:{{updateTime}}</p>
        <div class="line-one"></div>
        <div class="line-two"></div>
      </div>
      <div class="spec-block-two flex-box">
        <img src="../assets/warehouse_pic.png" />
        <p class="desc">各发货仓实时进度</p>
        <div class="line-one"></div>
        <div class="line-two"></div>
      </div>
      <div class="main-block">
        <div class="list-block one">
          <p class="title">发货英雄榜</p>
          <div class="line"></div>
          <ul class="list">
            <li v-for="item,index in sendOrder" class="item flex-box" :class="{good: index <= 2}">
              <p class="order">{{index + 1}}</p>
              <p class="flex-one">{{item.name}}</p>
              <p class="flex-one">{{item.num}}</p>
            </li>
          </ul>
        </div>
        <div class="list-block two">
          <p class="title">找货英雄榜</p>
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
        <p class="number">150,000,000</p>
        <div class="line"></div>
        <p class="desc">今日出货总量</p>
      </div>
      <div class="all-show-block flex-box">
        <div class="each-block flex-one">
          <p class="t-number">50000</p>
          <div class="num-fill-component">
            <div class="progress"></div>
          </div>
          <div class="warehouse-name">
            <span>8号仓</span>
          </div>
        </div>
        <div class="each-block flex-one">
          <p class="t-number">50000</p>
          <div class="num-fill-component">

          </div>
          <div class="warehouse-name">
            <span>9号仓</span>
          </div>
        </div>
        <div class="each-block flex-one">
          <p class="t-number">50000</p>
          <div class="num-fill-component">

          </div>
          <div class="warehouse-name">
            <span>10号仓</span>
          </div>
        </div>
        <div class="each-block flex-one">
          <p class="t-number">50000</p>
          <div class="num-fill-component" style="height: 350px;">

          </div>
          <div class="warehouse-name">
            <span>实体专卖</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-one right-area">
      <div class="spec-block flex-box">
        <img src="../assets/warehouse_logo.png" />
        <p class="title">天马云仓实时发货数据</p>
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
            <div class="each-area">
              <div class="desc flex-box">
                <span class="name">江苏</span>
                <span class="num">10.14%</span>
              </div>
              <div class="line-progress-wrapper">
                <div class="line-new"></div>
                <div class="num-line"></div>
              </div>
            </div>
            <div class="each-area">
              <div class="desc flex-box">
                <span class="name">江苏</span>
                <span class="num">10.14%</span>
              </div>
              <div class="line-progress-wrapper">
                <div class="line-new"></div>
                <div class="num-line"></div>
              </div>
            </div>
            <div class="each-area">
              <div class="desc flex-box">
                <span class="name">江苏</span>
                <span class="num">10.14%</span>
              </div>
              <div class="line-progress-wrapper">
                <div class="line-new"></div>
                <div class="num-line"></div>
              </div>
            </div>
            <div class="each-area">
              <div class="desc flex-box">
                <span class="name">江苏</span>
                <span class="num">10.14%</span>
              </div>
              <div class="line-progress-wrapper">
                <div class="line-new"></div>
                <div class="num-line"></div>
              </div>
            </div>
            <div class="each-area">
              <div class="desc flex-box">
                <span class="name">江苏</span>
                <span class="num">10.14%</span>
              </div>
              <div class="line-progress-wrapper">
                <div class="line-new"></div>
                <div class="num-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueEcharts from '../comment/vue-echarts.vue'
  import 'echarts'

export default {
  name: 'warehouse',
  data () {
    return {
      updateTime: '2017-11-11 22:00:00',
      testData: [
        {name: '2016/12/18 6:38:08', value: ['2016/12/18 6:38:08', 80]},
        {name: '2016/12/18 16:18:18', value: ['2016/12/18 16:18:18', 60]},
        {name: '2016/12/18 19:18:18', value: ['2016/12/18 19:18:18', 90]}
      ],
      anchor: [
        {name: '2016/12/18 00:00:00', value: ['2016/12/18 00:00:00', 0]},
        {name: '2016/12/19 00:00:00', value: ['2016/12/19 00:00:00', 0]}
      ],
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
          type: 'time',
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
          }
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
            data: this.testData,
            lineStyle: {
              normal: {
                color: '#ffd702'
              }
            }
          },
          {
            name: '.anchor',
            type: 'line',
            showSymbol: false,
            data: this.anchor,
            itemStyle: {normal: {opacity: 0}},
            lineStyle: {normal: {opacity: 0}}
          }
        ]
      }
    }
  },
  mounted() {

  },
  methods: {

  },
  components: {
    VueEcharts
  }
}
</script>

<style scoped lang="less">
.num-fill-component {
  position: relative;
  width: 100px;
  margin: 0 auto;
  height: 500px;
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
    height:300px;
    background-color: rgba(11, 183, 158, 0.8);
  }
}
.warehouse {
  padding-top: 127px;
  width: 100%;
  height: 100%;
  .left-area {
    .spec-block-one {
      margin-bottom: 30px;
      .line-one {
        position: absolute;
        top: 24px;
        left: 96px;
        width: 264px;
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
      align-items: center;
      padding-left: 100px;
      margin-bottom: 80px;
      .desc {
        margin-left: 6px;
        position: relative;
        top: -6px;
      }
      img {
        width: 170px;
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
    .spec-block-one,.spec-block-two {
      position: relative;
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
        width: 200px;
        height: 464px;
        background-image: url('../assets/find-order.png');
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
          margin-bottom: 10px;;

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
        color: #ff4e00;
        font-size: 70px;
        font-family: initial;
        font-weight: 700;
        letter-spacing: 4px;
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
    .all-show-block {
      margin-top: 50px;
      text-align: center;
      align-items: flex-end;
      .each-block {

        .t-number {
          margin-bottom: 10px;
          font-size: 20px;
          font-weight: 700;
          color: #01ff8a;
        }
        .warehouse-name {
          margin: 10px auto 0 auto;
          width: 120px;
          height: 34px;
          line-height: 34px;
          font-size: 20px;
          font-weight: 700;
          color: rgba(255, 78, 0, 0.9);
          background-image: url('../assets/warehouse_text_bg.png');
          background-size: cover;
        }
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
        top: 71px;
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
        top: 90px;
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
          margin-top: 20px;
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
              width: calc(100% - 3px);
              background-color: #ff4e00;
            }
          }
        }
      }
    }

  }
}

</style>
