<script setup>
// 自定义指令主要是为了重用涉及普通元素的底层 DOM 访问的逻辑
const vFocus = {
    mounted: (el) => el.focus()
}
</script>

<template>
    <div>
        <h1>This is Directive Component</h1>
        <input type="text" v-focus>
    </div>
</template>