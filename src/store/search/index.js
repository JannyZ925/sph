import {reqSearchResult} from "@/api";

export default ({
    state: {
        searchResult: {}
    },
    mutations: {
        GETSEARCHRESULT(state, value){
            state.searchResult = value
        }
    },
    actions: {
        // 获取查询结果
        async getSearchResult(context, params={}){
            // console.log(params)
            let result = await reqSearchResult(params)
            console.log(params)
            if(result.code === 200){
                context.commit('GETSEARCHRESULT', result.data)
            }
        }
    },
    getters: {
        // 商品
        goodsList(state){
            console.log(state.searchResult)
            // 如果网不好，state.searchResult.goodsList返回的是undefined，应该保证它至少是一个数组，所以后面要加 ||[]
            return state.searchResult.goodsList || []
        },
        // 属性
        attrsList(state){
            return state.searchResult.attrsList
        },
        // 品牌
        trademarkList(state){
            return state.searchResult.trademarkList
        }
    }
})
