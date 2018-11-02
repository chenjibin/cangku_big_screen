<template>
  <div id="map" style="width: 100%;height: 100%;position: absolute;z-index: 90"></div>
</template>

<script>
  import styleJson from '../utils/dark'
  export default {
    name: "map-line",
    data() {
      return {
        needData: [{
          from: {
            city: '广州',
            lnglat: [113.270793, 23.135308]
          },
          to: {
            city: '衡山',
            lnglat: [112.612787, 27.317599]
          }
        }, {
          from: {
            city: '广州',
            lnglat: [113.270793, 23.135308]
          },
          to: {
            city: '北京',
            lnglat: [116.413554, 39.911013]
          }
        }, {
          from: {
            city: '广州',
            lnglat: [113.270793, 23.135308]
          },
          to: {
            city: '三亚',
            lnglat: [109.518646, 18.258217]
          }
        }, {
          from: {
            city: '广州',
            lnglat: [113.270793, 23.135308]
          },
          to: {
            city: '上海',
            lnglat: [121.480237, 31.236305]
          }
        }, {
          from: {
            city: '广州',
            lnglat: [113.270793, 23.135308]
          },
          to: {
            city: '韶关',
            lnglat: [113.603757, 24.816174]
          }
        }],
        options: {
          //移动点半径
          moveRadius: 2,
          //移动点颜色
          fillColor: '#fff',
          //移动点阴影颜色
          shadowColor: '#fff',
          //移动点阴影大小
          shadowBlur: 10
        },
        map: null,
        moveLine: null
      }
    },
    mounted() {
      this.createMap();
      setTimeout(() => {
        this.createMoveLine();
      }, 1000)
    },
    methods: {
      createMap() {
         this.map = new BMap.Map('map', {
          minZoom: 5
        });
        this.map.centerAndZoom(new BMap.Point(112.03956, 26.063677), 6);
        this.map.enableScrollWheelZoom(true);
        this.map.setMapStyle({
          styleJson: styleJson
        });
      },
      createMoveLine() {
        let needData = [{
          from: {
            city: '连云港',
            lnglat: [119.219424,34.602487]
          },
          to: {
            city: '南京',
            lnglat: [118.804722,32.062938]
          }
        }, {
          from: {
            city: '连云港',
            lnglat: [119.219424,34.602487]
          },
          to: {
            city: '北京',
            lnglat: [116.413554, 39.911013]
          }
        }, {
          from: {
            city: '连云港',
            lnglat: [119.219424,34.602487]
          },
          to: {
            city: '天津',
            lnglat: [117.20952,39.092549]
          }
        }, {
          from: {
            city: '连云港',
            lnglat: [119.219424,34.602487]
          },
          to: {
            city: '上海',
            lnglat: [121.480237, 31.236305]
          }
        }, {
          from: {
            city: '连云港',
            lnglat: [119.219424,34.602487]
          },
          to: {
            city: '海南',
            lnglat: [110.326792,20.047808]
          }
        }, {
          from: {
            city: '连云港',
            lnglat: [119.219424,34.602487]
          },
          to: {
            city: '重庆',
            lnglat: [106.563611,29.568242]
          }
        }, {
            from: {
              city: '连云港',
              lnglat: [119.219424,34.602487]
            },
            to: {
              city: '济南',
              lnglat: [117.126974,36.656322]
            }
          }]
        this.moveLine = new MoveLine(this.map, {
          //marker点半径
          markerRadius: 2,
          //marker点颜色,为空或null则默认取线条颜色
          markerColor: null,
          //线条类型 solid、dashed、dotted
          lineType: 'solid',
          //线条宽度
          lineWidth: 1,
          //线条颜色
          colors: ['#F9815C', '#F8AB60', '#EDCC72', '#E2F194', '#94E08A', '#4ECDA5'],
          //移动点半径
          moveRadius: 2,
          //移动点颜色
          fillColor: '#fff',
          //移动点阴影颜色
          shadowColor: '#fff',
          //移动点阴影大小
          shadowBlur: 5,
          data: needData
        });
      }
    }
  }
</script>

<style scoped>

</style>
