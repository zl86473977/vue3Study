<script setup>
import ModelTest from '../components/ModelTest.vue'
defineOptions({
    inheritAttrs: false
})
</script>

<template>
    <!-- <div>
        <div>TestAttribute</div>
        <ModelTest />
        如果ModelTest不是单一根节点，父组件传递过来的prop不会透传给ModelTest
    </div> -->
    <div>
        <ModelTest v-bind="$attrs"/>
    </div>
    <div></div>
</template>