<!--项目中的全局组件放在components中-->
<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
        <div @mouseenter="enterList" @mouseleave="leaveList">
          <h2 class="all">全部商品分类</h2>
          <transition name="sort">
            <div class="sort" v-show="showCategoryList">
              <div class="all-sort-list2" @click="goSearch">
                <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId">
                  <!--              一级分类-->
                  <h3 @mouseenter="changeIndex(index)" :class="{ bg_red: currentIndex === index }">
                    <a href="javascript:;" :data-categoryName="c1.categoryName"
                       :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
                    <!-- 这里用router-link会有卡顿现象，如果鼠标移动速度快，一级分类的背景颜色跟不上
                    因为router-link是一个组件，服务器数据返回后，会创建很多的router-link组件，非常耗内存，因此出现卡顿现象 -->
                    <!-- <router-link to="/search">{{ c1.categoryName }}</router-link> -->
                  </h3>
                  <!--              二、三级分类-->
                  <div class="item-list clearfix" :style="{ display: currentIndex === index ? 'block' : 'none' }">
                    <div class="subitem" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                      <dl class="fore">
                        <dt>
                          <a href="javascript:;" :data-categoryName="c2.categoryName"
                             :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                          <!-- <router-link to="/search">{{ c2.categoryName }}</router-link> -->
                        </dt>
                        <dd>
                          <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                            <a href="javascript:;" :data-categoryName="c3.categoryName"
                               :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                            <!-- <router-link to="/search">{{ c3.categoryName }}</router-link> -->
                          </em>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
// 按需引入节流函数
import throttle from "lodash/throttle";

export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      showCategoryList: true
    };
  },

  methods: {
    // 鼠标移入一级分类，修改索引值
    changeIndex: throttle(function (index) {
      // index:鼠标移入某个一级分类的元素的索引值
      // 正常情况：鼠标进入每一个一级分类h3都会触发鼠标进入事件
      // 非正常情况：只有部分h3触发
      // 由于用户行为过快，导致浏览器反应不过来，若当前回调函数中有大量业务，有可能出现卡顿现象
      // console.log("鼠标移入" + index);
      this.currentIndex = index;
    }, 50),

    // 点击分类，跳转到search页面
    goSearch(event) {
      // 获取点击的元素
      let element = event.target
      // 解构赋值
      let {categoryname, category1id, category2id, category3id} = element.dataset
      // 设置跳转的参数
      let location = {name: "search"}
      let query = {categoryName: categoryname}
      // 如果有categoryname属性，表示点击的是分类的a标签
      if (categoryname) {
        // 如果有category1id属性，表示点击的是一级分类
        if (category1id) {
          query.category1id = category1id
        }
        // 如果有category2id属性，表示点击的是二级分类
        else if (category2id) {
          query.category2id = category2id
        }
        // 如果有category3id属性，表示点击的是三级分类
        else if (category3id) {
          query.category3id = category3id
        }
      }
      location.query = query
      if(this.$route.params !== null){
        location.params = this.$route.params
        this.$router.push(location)
      }
    },

    // 鼠标移入全部商品分类
    enterList() {
      // 让商品分类列表显示
      this.showCategoryList = true
    },
    // 鼠标移出全部商品分类
    leaveList() {
      // 取消背景色、隐藏二、三级分类
      this.currentIndex = -1;
      // 如果路由不是home则让商品分类列表隐藏
      if (this.$route.path !== "/home") {
        this.showCategoryList = false
      }
    }
  },

  computed: {
    ...mapState({
      // 右侧需要的是一个函数，当使用该计算属性时，右侧函数会立即执行
      // 参数state实质是大仓库中的数据
      categoryList: (state) => state.home.categoryList,
    }),
  },

  // 组件挂载完毕后向服务器发请求
  mounted() {
    // 下面这句写到App.vue的mounted()中，获取全部分类列表的请求只会发一次，性能更好
    // this.$store.dispatch("getCategoryList");
    // 如果路由不是home则让商品分类列表隐藏
    if (this.$route.path !== "/home") {
      this.showCategoryList = false
    }
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 460px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          //&:hover {
          //  .item-list {
          //    display: block;
          //  }
          //}
        }
      }
    }
    // sort动画效果
    .sort-enter, .sort-leave-to{
      height: 0;
    }
    .sort-leave, .sort-enter-to{
      height: 460px;
    }
    .sort-enter-active, .sort-leave-active{
      overflow: hidden;
      transition: 0.3s linear;
    }
  }
}

.bg_red {
  background-color: rgba(225, 37, 27, 0.1);
}
</style>