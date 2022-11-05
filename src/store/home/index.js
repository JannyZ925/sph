import {reqBannerList, reqCategoryList, reqFloorList} from "@/api";
export default ({
    state: {
        // 商品分类列表
        categoryList: [],
        // 轮播图数据
        bannerList: [],
        // Floor数据
        floorList: []
    },
    mutations: {
        GETCATEGORYLIST(state, categoryList){
            state.categoryList = categoryList
        },
        GETBANNERLIST(state, bannerList){
            // console.log("修改轮播图数据")
            state.bannerList = bannerList
        },
        GETFLOORLIST(state, floorList){
            state.floorList = floorList
        }
    },
    actions: {
        // 获取商品分类列表数据
        async getCategoryList(context, value){
            let result = await reqCategoryList()
            if(result.code === 200){
                context.commit('GETCATEGORYLIST', result.data)
            }
        },

        // 获取轮播图数据
        async getBannerList(context, value){
            // console.log("发起AJAX请求，获取轮播图数据")
            let result = await reqBannerList()
            if(result.code === 200){
                context.commit('GETBANNERLIST', result.data)
            }
        },

        // 获取Floor组件的数据
        async getFloorList(context, value){
            let result = await reqFloorList()
            if(result.code === 200){
                context.commit('GETFLOORLIST', result.data)
            }
        }
    },
    getters: {}
})