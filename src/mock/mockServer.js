// 该文件不需要对外暴露，因为它只需要在main.js引入一次让它执行即可，不需要使用它
import Mock from 'mockjs'

// banner 和 floor 没有对外暴露，但却可以引用，因为图片和json数据格式都是webpack默认对外暴露的
import banner from './banner.json'
import floor from './floor.json'

// 模拟广告位轮播数据接口
Mock.mock('/mock/banner', {
    code: 200,
    data: banner
})

// 模拟楼层数据接口
Mock.mock('/mock/floor', {
    code: 200,
    data: floor
})