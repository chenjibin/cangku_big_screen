<template>
  <div class="shop flex-box">
    <div class="fs-digit-roll">
      <digit-roll :roll-digits="digits" :dur="during"></digit-roll>
    </div>
    <div class="fs-count-time">
      <p class="time">{{updateTime}}</p>
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
      <!--<div class="number-block">-->
      <!--<vue-countup class="number" :start="0" :end="nowMoney"></vue-countup>-->
      <!--</div>-->
      <div class="all-sale-block">
        <vue-echarts :options="polar2" :auto-resize="true" class="line-pic"
                     style="width: 920px;height: 600px"></vue-echarts>
      </div>
    </div>
    <div class="right-area">
      <div class="fs-block-component">
        <p class="title">销售额曲线图(1小时)</p>
        <div class="" style="height: 260px;margin-top: 20px;">
          <vue-echarts :options="polar" :auto-resize="true"></vue-echarts>
        </div>
      </div>
      <div class="fs-block-component">
        <p class="title">品牌销售排行榜</p>
        <div class="brand-arrange">
          <div class="" style="height: 300px;display: flex;justify-content: center;align-items: center;">
            <p style="font-size: 30px;color: rgba(255,255,255,0.6)">尽请期待</p>
          </div>
          <!--<ul class="list" style="list-style: none">-->
            <!--<li class="brand-list-item spec">-->
              <!--<div class="flex-box flex-align-center flex-just-space">-->
                <!--<div class="left-item flex-box flex-align-center">-->
                  <!--<img src="http://tm.xyyzi.com:9099/oa/test/image/arrange_1.png" class="icon"/>-->
                  <!--<div class="img-wrap">-->
                    <!--<img src="http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png"/>-->
                  <!--</div>-->
                  <!--<p class="brand-name">阿迪达斯</p>-->
                <!--</div>-->
                <!--<div class="right-item">-->
                  <!--<div class="num">-->
                    <!--<vue-countup class="number" :start="0" :end="125487456"></vue-countup>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li class="brand-list-item spec">-->
              <!--<div class="flex-box flex-align-center flex-just-space">-->
                <!--<div class="left-item flex-box flex-align-center">-->
                  <!--<img src="http://tm.xyyzi.com:9099/oa/test/image/arrange_2.png" class="icon"/>-->
                  <!--<div class="img-wrap">-->
                    <!--<img src="http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png"/>-->
                  <!--</div>-->
                  <!--<p class="brand-name">阿迪达斯</p>-->
                <!--</div>-->
                <!--<div class="right-item">-->
                  <!--<div class="num">-->
                    <!--<vue-countup class="number" :start="0" :end="125487456"></vue-countup>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li class="brand-list-item spec">-->
              <!--<div class="flex-box flex-align-center flex-just-space">-->
                <!--<div class="left-item flex-box flex-align-center">-->
                  <!--<img src="http://tm.xyyzi.com:9099/oa/test/image/arrange_3.png" class="icon"/>-->
                  <!--<div class="img-wrap">-->
                    <!--<img src="http://tm.xyyzi.com:9099/oa/upload/head/1526527828992.png"/>-->
                  <!--</div>-->
                  <!--<p class="brand-name">阿迪达斯</p>-->
                <!--</div>-->
                <!--<div class="right-item">-->
                  <!--<div class="num">-->
                    <!--<vue-countup class="number" :start="0" :end="125487456"></vue-countup>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li class="brand-list-item">-->
              <!--<div class="flex-box flex-just-space flex-align-center">-->
                <!--<div class="left-item flex-box flex-align-center">-->
                  <!--<span class="tag">4.</span>-->
                  <!--<p class="brand-name">阿迪达斯</p>-->
                <!--</div>-->
                <!--<div class="right-item">-->
                  <!--<div class="num">-->
                    <!--<vue-countup class="number" :start="0" :end="125487456"></vue-countup>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li class="brand-list-item">-->
              <!--<div class="flex-box flex-just-space flex-align-center">-->
                <!--<div class="left-item flex-box flex-align-center">-->
                  <!--<span class="tag">5.</span>-->
                  <!--<p class="brand-name">阿迪达斯</p>-->
                <!--</div>-->
                <!--<div class="right-item">-->
                  <!--<div class="num">-->
                    <!--<vue-countup class="number" :start="0" :end="125487456"></vue-countup>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
          <!--</ul>-->
        </div>

        <!--<div class="area-block">-->
        <!--<div class="each-area" v-for="item,index in provinceData" v-if="index <= 5">-->
        <!--<div class="desc flex-box">-->
        <!--<span class="name">{{item.name}}</span>-->
        <!--<span class="num">{{item.percent + '%'}}</span>-->
        <!--</div>-->
        <!--<fs-lineprogress :percent="index === 0 ? 100 : item.percent/provinceData[0].percent*100"></fs-lineprogress>-->
        <!--</div>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>
  import DigitRoll from '@/comment/new-digit-roll'
  import ShopArrange from '@/comment/shop-arrange'
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
                color: '#FFBF00'
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
                color: 'rgba(78, 126, 255, 0.5)'
              }
            }
          },
          series: [
            {
              name: '销售额',
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
                opacity: 0.8
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
              show: false,
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
      ShopArrange
    }
  }
</script>

<style lang="less">
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

  .fs-swiper {
    height: 570px;
    overflow: hidden;
    .list-item {
      padding: 20px 0;
      border-bottom: 1px solid #7411AE;
      .shop-name {
        font-size: 24px;
        color: #fff;
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
    width: 100%;
    height: 100%;
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
