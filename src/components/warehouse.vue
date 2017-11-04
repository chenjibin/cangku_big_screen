<template>
  <div class="warehouse flex-box">
    <div class="flex-one left-area">
      <div class="spec-block-one">
        <p class="time">数据更新时间:{{updateTime}}</p>
        <div class="line-one"></div>
        <div class="line-two"></div>
      </div>
      <div class="spec-block-one">
        <img src="../assets/warehouse_pic.png" />
        <p class="desc">各发货仓实时进度</p>
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
    <div class="flex-one right-area" style="background-color: #666;"></div>
  </div>
</template>

<script>
export default {
  name: 'warehouse',
  data () {
    return {
      updateTime: '2017-11-11 22:00:00'
    }
  }
}
</script>

<style scoped lang="less">
.num-fill-component {
  width: 100px;
  margin: 0 auto;
  height: 400px;
  border:1px solid #0bb79e;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: rgba(13, 3, 66,0.5);
}
.warehouse {
  padding-top: 127px;
  width: 100%;
  height: 100%;
  .left-area {
    .spec-block-one {
      margin-bottom: 60px;
      .line-one {
        position: absolute;
        top: 24px;
        left: 96px;
        width: 285px;
        height: 1px;
        background-color: #4e7eff;
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
        background-color: #4e7eff;
        &::after {
          content: '';
          display: inline-block;
          position: absolute;
          right: -24px;
          top: -8px;
          width: 26px;
          height: 1px;
          background-color: #4e7eff;
          transform: rotateZ(141deg);
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
      font-size: 14px;
      color: #fff;
      font-weight: 700;
      letter-spacing: 2px;
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
        background-color: #4e7eff;
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
      margin-top: 60px;
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
}

</style>
