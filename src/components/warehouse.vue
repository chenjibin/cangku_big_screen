<template>
  <div class="warehouse flex-box">
    <div class="fs-digit-roll">
      <digit-roll :roll-digits="digits" :dur="during" :show-pre="false"></digit-roll>
    </div>
    <div class="fs-count-time">
      <p class="time" style="font-size: 24px">{{updateTime}}</p>
    </div>
    <!--<map-line></map-line>-->
    <img src="../assets/warehouse_logo_new.png" class="warehouse-log"/>
    <!--<fs-boom-->
    <!--:visible="boomShow"-->
    <!--:number="boomNum"-->
    <!--@show="showBoom"-->
    <!--bgVideoUrl="http://guider.intersport.net.cn/video/bg_video2.mp4"-->
    <!--@hide="hideBoom"></fs-boom>-->
    <!--<div class="logo-wrapper">-->
    <!--<img src="../assets/tm_logo.png" />-->
    <!--</div>-->
    <div class="left-area">
      <div class="fs-block-component">
        <p class="title" style="margin-bottom: 30px">各仓库发货进度</p>
        <div class="warehouse-speed-block">
          <div class="each-warehouse" v-for="item,index in warehouseData">
            <div class="desc flex-box flex-just-space flex-align-center">
              <span class="name">{{item.name}}</span>
              <span class="num">{{item.target}}单</span>
            </div>
            <fs-lineprogress
              :percent="(item.now / item.target)*100"></fs-lineprogress>
          </div>
        </div>
      </div>
      <div class="fs-block-component">
        <p class="title">完成发货速率(1小时)</p>
          <div style="height: 260px; margin-top: 20px;margin-bottom: 30px;">
            <vue-echarts :options="polar" :auto-resize="true"></vue-echarts>
          </div>
      </div>
    </div>
    <div class="center-area flex-one">
    </div>
    <div class="right-area">
      <div class="fs-block-component" style="margin-bottom: 30px">
        <p class="title">发货英雄榜</p>
        <div class="">
          <common-arrange :arrange-data="sendOrder"></common-arrange>
        </div>
      </div>
      <div class="fs-block-component">
        <p class="title">找货英雄榜</p>
        <div class="">
          <common-arrange :arrange-data="findOrder"></common-arrange>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import jsonp from '@/utils/jsonp'
  import VueEcharts from 'vue-echarts'
  import VueCountup from '@/comment/vue-countup'
  import FsFill from '@/comment/fs-fill'
  import FsLineprogress from '@/comment/fs-lineprogress'
  import FsBoom from '@/comment/fs-boom'
  import DigitRoll from '@/comment/new-digit-roll'
  import CommonArrange from '@/comment/common-arrange'
  import MapLine from '@/comment/map-line'

  export default {
    name: 'warehouse',
    data() {
      return {
        timer: null,
        boomNum: {},
        boomShow: false,
        digits: '000000',
        during: 2000,
        showBigAni: [],
        serverBigArr: [],
        updateTime: '0000-00-00 00:00:00',
        saleData: {
          start: 0,
          end: 0
        },
        provinceData: [],
        warehouseData: [],
        sendOrder: [],
        findOrder: [],
        polar: {
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '20',
            top: '20',
            width: '340px',
            height: '220px',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: ['07', '08', '09', '10', '11', '12', '13'],
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
      this.getWarehouseData()
      this.timer = setInterval(() => {
        this.getWarehouseData()
      }, globalData.duration)
    },
    destroyed() {
      clearInterval(this.timer)
    },
    methods: {
      _RollDigit(num) {
        const digit = Number(num).toFixed(0)
        let ramdowNumStrLen = digit.length;
        if (ramdowNumStrLen < 6) {
          let dur = 6 - ramdowNumStrLen;
          let lin = ''
          while (dur > 0) {
            lin += '0'
            dur--
          }
          this.digits = lin + digit;
        }
      },
      getWarehouseData() {
        jsonp(globalData.api, {}, {param: 'jsonpCallback', prefix: 'jp'}).then((res) => {
          if (res.success) {
            this.updateTime = res.results.updateTime
            this._RollDigit(res.results.saledData)
            this.saleData.end = res.results.saledData
            this.showBigAni = res.results.warehouseBigAni || []
            this.isShowBigAni(this.saleData.end)
            this.provinceData = res.results.provinceData
            this.warehouseData = res.results.warehouseData
            this.sendOrder = res.results.sendOrder
            this.findOrder = res.results.findOrder
            let newArr = []
            let newArr2 = []
            res.results.radioData.forEach((item) => {
              newArr.push(+item.num)
              newArr2.push(item.hour)
            })
            this.polar.series[0].data = newArr
            this.polar.xAxis.data = newArr2
          }
        })
      },
      showBoom() {
        this.boomShow = true
      },
      hideBoom() {
        this.boomShow = false
      },
      isShowBigAni(now) {
        if (this.showBigAni.length === 0) return
        this.showBigAni.forEach((item, index) => {
          let flag = now >= item.num.val && item.flag
          if (flag) {
            this.boomNum = item.num
          }
        })
      },
      toTrand(num) {
        return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
      }
    },
    components: {
      VueEcharts,
      VueCountup,
      FsFill,
      FsLineprogress,
      FsBoom,
      DigitRoll,
      CommonArrange,
      MapLine
    }
  }
</script>

<style lang="less" scoped>
  .warehouse-speed-block {
    .each-warehouse {
      margin-bottom: 30px;
      .desc {
        margin-bottom: 10px;
      }
      .name {
        color: #fff;
        font-size: 26px;
        font-weight: 700;
      }
      .num {
        font-size: 24px;
        font-weight: 700;
        color: #FFBF00;
      }
    }
  }
  .warehouse-log {
    width: 103px;
    height: auto;
    position: absolute;
    left: 53px;
    top: 135px;
  }
  .fs-digit-roll {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 180px;
    z-index: 100;
  }
  .fs-count-time {
    position: absolute;
    top: 183px;
    right: 50px;
    z-index: 100;
    color: #fff;
  }
  .fs-block-component {
    position: relative;
    z-index: 100;
    padding: 0 50px;
    .title {
      font-size: 24px;
      font-weight: 700;
      color: #FFBF00;
      padding-bottom: 15px;
      border-bottom: 2px solid #FFBF00;
    }
  }
  .warehouse {
    position: relative;
    width: 100%;
    height: 100%;
    .left-area {
      flex: 0 0 500px;
      width: 500px;
      padding-top: 275px;
    }
    .center-area {
    }
    .right-area {
      flex: 0 0 500px;
      width: 500px;
      padding-top: 275px;
    }
  }

</style>
