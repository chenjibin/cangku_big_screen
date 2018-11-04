<template>
  <div class="shop flex-box">
    <div class="fs-digit-roll">
      <digit-roll :roll-digits="digits" :dur="during"></digit-roll>
    </div>
    <div class="fs-count-time">
      <p class="time" style="font-size: 24px">{{updateTime}}</p>
    </div>
    <!--<fs-boom-->
    <!--:visible="boomShow"-->
    <!--:number="boomNum"-->
    <!--@show="showBoom"-->
    <!--@hide="hideBoom"-->
    <!--bgVideoUrl="http://guider.intersport.net.cn/video/bg_video.mp4"-->
    <!--pre="¥"></fs-boom>-->
    <div class="left-area">
      <div class="fs-block-component">
        <p class="title">店铺销售排行榜</p>
        <div class="fs-content">
          <shop-arrange :shopData="shopData"></shop-arrange>
        </div>
      </div>
    </div>
    <div class="center-area">
      <div class="all-sale-block">
        <vue-echarts :options="polar2" :auto-resize="true" class="line-pic"
                     style="width: 920px;height: 600px"></vue-echarts>
      </div>
    </div>
    <div class="right-area">
      <div class="fs-block-component" style="margin-bottom: 40px">
        <p class="title">销售额曲线图(1小时)</p>
        <div class="" style="height: 260px;margin-top: 20px;overflow: hidden">
          <vue-echarts :options="polar" :auto-resize="true"></vue-echarts>
        </div>
      </div>
      <div class="fs-block-component">
        <p class="title">品牌销售排行榜</p>
        <div class="brand-arrange">
          <brand-arrange :data="brandData"></brand-arrange>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import DigitRoll from '@/comment/new-digit-roll'
  import ShopArrange from '@/comment/shop-arrange'
  import BrandArrange from '@/comment/brand-arrange'
  import VueEcharts from 'vue-echarts'
  import VueCountup from '@/comment/vue-countup'
  import FsFill from '@/comment/fs-fill'
  import FsLineprogress from '@/comment/fs-lineprogress'
  import jsonp from '@/utils/jsonp'

  export default {
    name: 'warehouse',
    data() {
      return {
        digits: '000000000',
        swiperOption: {},
        during: 2000,
        boomNum: {},
        shopShow: true,
        showBomeArr: [10000, 50000, 100000, 150000],
        boomShow: false,
        cancanShow: true,
        canShow: true,
        nowMoney: 0,
        shopData: [],
        brandData: [],
        updateTime: '0000-00-00 00:00:00',
        provinceData: [],
        showBigAni: [],
        timer: null,
        timer2: null,
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
            data: [],
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: '#4E7EFF'
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
                color: '#4E7EFF'
              }
            },
            splitLine: {
              lineStyle: {
                type: 'value',
                color: 'rgba(78, 126, 255, 0.5)'
              }
            }
          },
          series: [
            {
              name: '销售额',
              type: 'line',
              stack: '总量',
              smooth: true,
              lineStyle: {
                normal: {
                  color: '#ffd702'
                }
              },
              data: []
            }
          ]
        },
        polar2: {
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '80',
            bottom: '0',
            containLabel: true
          },
          xAxis: {
            type: 'time',
            boundaryGap: false,
            splitNumber: 13,
            axisLine: {
              lineStyle: {
                color: '#FFBF00'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#FFBF00',
                type: 'value',
                opacity: 0.6
              }
            },
            nameTextStyle: {
              color: '#fff'
            },
            axisLabel: {
              textStyle: {
                color: '#fff'
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#fff'
              },
              formatter(value, index) {
                const numString = String(value)
                const numLength = numString.length
                let returnStrin = ''
                if (numLength >= 9) {
                  returnStrin = (value / 1000000000) + '亿'
                } else {
                  returnStrin = (value / 10000) + '万'
                }
                return returnStrin
              }
            },

            axisLine: {
              show: true,
              lineStyle: {
                color: '#FFBF00'
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(78, 126, 255, 0.5)'
              }
            }
          },
          series: [
            {
              name: '当前销售总金额',
              type: 'line',
              stack: '总量',
              smooth: true,
              showSymbol: false,
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
      jsonp(globalData.saleApi, {flag: 'refresh'}, {param: 'jsonpCallback', prefix: 'jp'}).then((res) => {
        if (res.success) {
          this.updateTime = res.results.updateTime
          this.nowMoney = res.results.nowMoney
          this._RollDigit(res.results.nowMoney)
          this.showBigAni = res.results.saleBigAni || []

          this.isShowBigAni(this.nowMoney)

          this.provinceData = res.results.provinceData
          this.brandData = res.results.brandData.sort((x, y) => {
            return y.amount - x.amount
          })
          this.shopData = res.results.shopData.sort((x, y) => {
            return y.money - x.money
          })

          let newArr = []
          let newArr2 = []
          res.results.saleRadioData.forEach((item) => {
            newArr.push(+item.num)
            newArr2.push(item.hour)
          })
          this.polar.series[0].data = newArr
          this.polar.xAxis.data = newArr2

          this.polar2.series[0].data = res.results.allSaleData
        }
      }).catch((err) => {
        console.log(err)
      })
      this.timer = setInterval(() => {
        this.getAllShopData()
      }, globalData.saleDuration)
    },
    mounted() {
      this.timer2 = setInterval(() => {
        this.shopShow = !this.shopShow
      }, 9000)
    },
    destroyed() {
      clearInterval(this.timer)
      clearInterval(this.timer2)
    },
    methods: {
      _RollDigit(num) {
        const digit = Number(num).toFixed(0)
        let ramdowNumStrLen = digit.length;
        if (ramdowNumStrLen < 9) {
          let dur = 9 - ramdowNumStrLen;
          let lin = ''
          while (dur > 0) {
            lin += '0'
            dur--
          }
          this.digits = lin + digit;
        }
      },
      getAllShopData() {
        jsonp(globalData.saleApi, {}, {param: 'jsonpCallback', prefix: 'jp'}).then((res) => {
          if (res.success) {
            this.updateTime = res.results.updateTime
            this._RollDigit(res.results.nowMoney);
            this.nowMoney = res.results.nowMoney
            this.showBigAni = res.results.saleBigAni || []
            this.isShowBigAni(this.nowMoney)
            this.provinceData = res.results.provinceData
            this.brandData = res.results.brandData.sort((x, y) => {
              return y.amount - x.amount
            })
            this.shopData = res.results.shopData.sort((x, y) => {
              return y.money - x.money
            })

            let newArr = []
            let newArr2 = []
            res.results.saleRadioData.forEach((item) => {
              newArr.push(+item.num)
              newArr2.push(item.hour)
            })
            this.polar.series[0].data = newArr
            this.polar.xAxis.data = newArr2

            let newSale = {}
            newSale.name = res.results.updateTime
            newSale.value = [res.results.updateTime, res.results.nowMoney]

            this.polar2.series[0].data = [...this.polar2.series[0].data, newSale]
          }
        }).catch((err) => {
          console.log(err)
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
      }
    },
    components: {
      DigitRoll,
      VueEcharts,
      VueCountup,
      FsFill,
      FsLineprogress,
      ShopArrange,
      BrandArrange
    }
  }
</script>

<style lang="less" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }

  .fs-count-time {
    position: absolute;
    top: 183px;
    right: 50px;
    z-index: 100;
    color: #fff;
  }
  .fs-block-component {
    padding: 0 50px;
    .title {
      font-size: 24px;
      font-weight: 700;
      color: #FFBF00;
      padding-bottom: 15px;
      border-bottom: 2px solid #FFBF00;
    }
  }
  .shop {
    position: relative;
    width: 1920px;
    height: 1080px;
    overflow: hidden;
    .fs-digit-roll {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 180px;
      z-index: 100;
    }
    .left-area {
      flex: 0 0 500px;
      width: 500px;
      padding-top: 275px;
    }
    .center-area {
      padding-top: 360px;
      flex: 1;
      text-align: center;
      .all-sale-block {
      }
    }
    .right-area {
      flex: 0 0 500px;
      width: 500px;
      padding-top: 275px;
    }
  }
</style>
