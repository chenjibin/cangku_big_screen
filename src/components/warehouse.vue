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
          <ul>

          </ul>

        </div>
        <div class="list-block two">
          <p class="title">找货英雄榜</p>
          <div class="line"></div>

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
        <div class="table-line-block">

        </div>
        <div class="piv-order-block">

        </div>

      </div>
    </div>
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
  height: 500px;
  border:1px solid #0bb79e;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: rgba(10, 2, 47, 0.5);;
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
        width: 240px;
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
        width: 140px;
      }
      .line-one {
        position: absolute;
        top: 52px;
        left: 238px;
        width: 125px;
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
          right: -89px;
          top: 64px;
          width: 134px;
          height: 1px;
          background-color: rgba(78, 126, 255, 0.8);
          transform: rotateZ(71deg);
        }
      }
      .line-two {
        position: absolute;
        top: 179px;
        left: 406px;
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
      font-size: 14px;
      color: #fff;
      font-weight: 700;
    }
    .main-block {
      position: relative;
      .list-block {
        position: absolute;
        padding: 10px;
        width: 180px;
        height: 416px;
        background-image: url('../assets/find-order.png');
        background-size: contain;
        background-repeat: no-repeat;
        &.one {
          left: 60px;
        }
        &.two {
          left: 260px;
          top:50px;;
        }
        .title {
          font-weight: 700;
          color: #ff4e00;
          margin-bottom: 10px;;

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
      font-size: 14px;
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
        width: 258px;
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
        left: 266px;
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
      .table-line-block {
        margin-bottom: 30px;
        width: 400px;
        height: 290px;
        background-image: url('../assets/right-two.png');
        background-size: contain;
        background-repeat: no-repeat;
      }
      .piv-order-block {
        width: 400px;
        height: 290px;
        background-image: url('../assets/right-two.png');
        background-size: contain;
        background-repeat: no-repeat;

      }
    }

  }
}

</style>
