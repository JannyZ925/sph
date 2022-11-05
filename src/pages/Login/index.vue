<template>
  <div>
    <div class="container">
      <div class="loginFrame">

        <ul class="loginMethod">
          <li>
            <el-link href="">扫码登录</el-link>
          </li>
          <el-divider direction="vertical"></el-divider>
          <li>
            <el-link href="">账户登录</el-link>
          </li>
        </ul>

        <el-divider></el-divider>

        <div class="content">
          <el-input placeholder="邮箱/账号名/登录手机" clearable prefix-icon="el-icon-s-custom"
                    v-model="userName"></el-input>
          <el-input placeholder="密码" show-password clearable prefix-icon="el-icon-key"
                    v-model="password"></el-input>
          <el-alert title="账号或密码错误！" type="error" show-icon center :closable="false"></el-alert>
          <el-link type="primary">忘记密码</el-link>
          <el-button>登录</el-button>
        </div>

        <el-divider></el-divider>

        <div class="footer">
          <div class="loginTool">
            <el-link>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-QQ"></use>
              </svg>
              <span>QQ</span>
            </el-link>

            <el-divider direction="vertical"></el-divider>

            <el-link>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixin"></use>
              </svg>
              <span>微信</span>
            </el-link>
          </div>

          <div>
            <el-link href="" type="primary">立即注册</el-link>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li><a href="">关于我们</a></li>
        <el-divider direction="vertical"></el-divider>
        <li><a href="">联系我们</a></li>
        <el-divider direction="vertical"></el-divider>
        <li><a href="">联系客服</a></li>
        <el-divider direction="vertical"></el-divider>
        <li><a href="">商家入驻</a></li>
        <el-divider direction="vertical"></el-divider>
        <li><a href="">营销中心</a></li>
        <el-divider direction="vertical"></el-divider>
        <li><a href="">手机尚品汇</a></li>
        <el-divider direction="vertical"></el-divider>
        <li><a href="">销售联盟</a></li>
        <el-divider direction="vertical"></el-divider>
        <li><a href="">尚品汇社区</a></li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userName: '',
      password: ''
    }
  }
}
</script>

<style lang="less" scoped>
@media only screen and (max-width: 768px) {
  .loginFrame {
    width: 60%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1000px) {
  .loginFrame {
    width: 50%;
  }
}

@media only screen and (min-width: 1000px) {
  .loginFrame {
    width: 35%;
  }
}

.container {
  width: 100vm;
  height: 540px;
  background: url('./images/loginbg.png') no-repeat;
  background-size: cover;
  position: relative;

  .el-link.is-underline:hover:after {
    border-bottom: none;
  }

  .loginFrame {
    height: 78%;
    background-color: #fff;
    border-radius: 5px;

    position: absolute;
    right: 10%;
    top: 0;
    bottom: 0;
    margin: auto 0;

    .el-divider--horizontal {
      margin: 0 0 30px;
    }

    .loginMethod {
      display: flex;
      justify-content: space-evenly;

      li {
        padding: 15px 0;

        .el-link {
          font-size: 18px;

          &:hover {
            font-weight: bold;
          }
        }
      }

      .el-divider {
        height: 20px;
        margin: 18px 0 0;
      }
    }

    .content {
      width: 100%;

      .el-input {
        display: block;
        width: 70%;
        margin: 0 auto 30px;
      }

      .el-link {
        display: block;
        width: 70%;
        text-align: right;
        margin: 0 auto 30px;
      }

      .el-alert {
        position: absolute;
        width: 40%;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 52%;
      }

      .el-button {
        display: block;
        width: 40%;
        margin: 0 auto 30px;
        background-color: brown;
        color: white;
      }
    }

    .footer {
      width: 70%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      .loginTool {
        .el-link {
          span {
            vertical-align: top;
            margin-left: 5px;
          }
        }

        .el-divider--vertical {
          margin: 0 15px;
        }
      }
    }
  }
}

.copyright{
  width: 100%;
  height: 70px;
  background-color:rgb(234, 234, 234);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  
  ul{
    display: flex;
    justify-content: center;

    a{
      &:hover{
        color: brown;
      }
    }

    .el-divider{
      margin-top:2px;
    }
  }
}
</style>