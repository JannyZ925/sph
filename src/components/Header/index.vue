<template>
  <div class="header">
    <div class="top">
      <div class="login-and-register">
      <span>
        尚品汇欢迎您！请 <router-link to="/login">登录</router-link>
      </span>
        <router-link to="/register">免费注册</router-link>
      </div>

      <div class="navigator">
        <a href="">我的订单</a>
        <a href="">我的购物车</a>
        <a href="">我的尚品汇</a>
        <a href="">尚品汇会员</a>
        <a href="">企业采购</a>
        <a href="">关注尚品汇</a>
        <a href="">合作招商</a>
        <a href="">商家后台</a>
      </div>
    </div>

    <div class="bottom">
      <div class="bottom-icon">
        <router-link to="/home">
          <img src="./images/header-icon.png">
        </router-link>
      </div>

      <div class="search">
        <input type="text" v-model="keyword">
        <button @click="goSearch">搜索</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      keyword: ''
    }
  },
  methods: {
    goSearch(){
      let location = {name: "search"}
      if(this.$route.query !== null){
        location.query = this.$route.query
      }
      location.params = {keyword: this.keyword}
      this.$router.push(location)
      // this.keyword = ""
    }
  }
}
</script>

<style scoped lang="less">
.top {
  background-color: rgb(234,234,234);
  display: flex;
  padding: 10px 0;
  justify-content: space-around;

  a:hover{
    color: red;
  }

  .login-and-register {
    a {
      padding: 0 10px;
    }

    span {
      a {
        border-right: 1px solid lightgrey;
      }
    }
  }

  .navigator {
    display: flex;

    a {
      display: block;
      padding: 0 10px;

      &:not(:last-of-type){
        border-right: 1px solid lightgrey;
      }
    }
  }
}
.bottom{
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  align-items: center;

  .search{
    width: 40%;
    input, button{
      height: 30px;
      border: 2px solid rgb(234,74,54);
      box-sizing: border-box;
    }
    input{
      padding-left: 10px;
      width: 80%;
      outline: none;
    }
    button{
      color: white;
      width: 10%;
      background-color: rgb(234,74,54);
    }
  }
}

</style>