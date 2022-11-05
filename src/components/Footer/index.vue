<template>
  <div style="background-color:rgb(234, 234, 234); padding: 15px 0">
    <div class="footer">
      <el-row>
        <el-col :span="4">
          <div class="ta-center">
            <h3>购物指南</h3>
            <ul>
              <li><a href="">购物流程</a></li>
              <li><a href="">会员介绍</a></li>
              <li><a href="">生活旅行/团购</a></li>
              <li><a href="">常见问题</a></li>
              <li><a href="">购物指南</a></li>
            </ul>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="ta-center">
            <h3>配送方式</h3>
            <ul>
              <li><a href="">上门自提</a></li>
              <li><a href="">211限时达</a></li>
              <li><a href="">配送服务查询</a></li>
              <li><a href="">配送费收取标准</a></li>
              <li><a href="">海外配送</a></li>
            </ul>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="ta-center">
            <h3>支付方式</h3>
            <ul>
              <li><a href="">在线支付</a></li>
              <li><a href="">分期付款</a></li>
              <li><a href="">货到支付</a></li>
              <li><a href="">邮局汇款</a></li>
              <li><a href="">公司转账</a></li>
            </ul>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="ta-center">
            <h3>售后服务</h3>
            <ul>
              <li><a href="">售后政策</a></li>
              <li><a href="">价格保护</a></li>
              <li><a href="">退款说明</a></li>
              <li><a href="">返修/退换货</a></li>
              <li><a href="">取消订单</a></li>
            </ul>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="ta-center">
            <h3>特色服务</h3>
            <ul>
              <li><a href="">夺宝岛</a></li>
              <li><a href="">DIY装机</a></li>
              <li><a href="">生活旅行/团购</a></li>
              <li><a href="">延保服务</a></li>
              <li><a href="">尚品汇E卡</a></li>
              <li><a href="">尚品汇通信</a></li>
            </ul>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="ta-center">
            <h3>帮助中心</h3>
            <img src="./images/wx-cz.jpg" alt="">
          </div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <div class="bottom ta-center">
        <el-row>
          <span><a href="">关于我们</a></span>
          <el-divider direction="vertical" class="bgc-black"></el-divider>
          <span><a href="">商家入驻</a></span>
          <el-divider direction="vertical" class="bgc-black"></el-divider>
          <span><a href="">营销中心</a></span>
          <el-divider direction="vertical" class="bgc-black"></el-divider>
          <span><a href="">友情链接</a></span>
          <el-divider direction="vertical" class="bgc-black"></el-divider>
          <span><a href="">联系我们</a></span>
        </el-row>
        <el-row class="mt-10"><span>地址：北京市昌平区宏福科技园综合楼6层</span></el-row>
        <el-row class="mt-10"><span>京ICP备19006430号</span></el-row>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="less">
.footer {
  width: 1100px;
  margin: 0 auto;

  .ta-center {
    text-align: center;
  }

  .bgc-black {
    background-color: black;
  }

  a {
    line-height: 20px;

    &:hover {
      color: red;
    }
  }

  h3{
    margin-bottom: 5px;
  }

  .bottom {
    .mt-10 {
      margin-top: 10px;
    }

    .el-divider--vertical {
      top: -1px;
    }
  }
}
</style>