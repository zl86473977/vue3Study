<script setup>
defineOptions({
    inheritAttrs: false
})

// 定义同步组件
// import ModelTest from '../components/ModelTest.vue'
import { defineAsyncComponent } from 'vue'

// 定义异步组件
// ES模块动态导入
const asyncComponent = defineAsyncComponent(() => import('../components/ModelTest.vue'))
// 返回 Promise
// const asyncComponent1 = defineAsyncComponent(() => {
//     return new Promise((resolve, reject) => {
//         resolve(ModelTest)
//     })
// })


</script>

<template>
    <div>
        <div>TestAttribute</div>

        <!-- <ModelTest /> -->
        <!-- <asyncComponent></asyncComponent> -->
        <!-- <asyncComponent1></asyncComponent1> -->

        <div>
            如果ModelTest不是单一根节点，父组件传递过来的prop不会透传给ModelTest
        </div>
    </div>
    <!-- <div>
        <ModelTest v-bind="$attrs"/>
    </div>
    <div></div> -->
</template>