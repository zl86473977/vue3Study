<script setup>
import { ref } from "vue"

// 自定义指令主要是为了重用涉及普通元素的底层 DOM 访问的逻辑
const vFocus = {
    mounted: (el) => el.focus()
}
// el 指令绑定到的元素，这可以用于直接操作DOM
// binding 一个对象，包含以下属性
    // value 传递给指令的值 v-leo="2" 值是2
    // oldValue 之前的值，仅在 beforeUpdate 和 updated 中可用。无论值是否更改，它都可用
    // arg 传递给指令的参数（如果有的话）。例如在v-leo:bbc中，参数是 "bbc"
    // modifiers: 一个包含修饰符的对象（如果有的话）。例如在v-leo.mark.mc中，修饰符对象是{ mark: true, mc: true }
    // instance: 使用该指令的组件实例
    // dir 指令的定义对象
// vnode 代表绑定元素的底层VNode
// prevNode 代表之前的渲染中指令所绑定元素的VNode。仅在 beforeUpdate 和 updated 钩子中可用
// 除了 el 外，其他参数都是只读的，不要更改它们。若需要在不同的钩子间共享信息，可用元素的 dataset attribute 实现
const vLeo = {
    // 在绑定元素的 attribute 前 或事件监听器应用前调用
    created(el, binding, vnode, preVnode) {
       // 下面会介绍各个参数的细节 
       console.log('----created----');
       console.log(el.dataset.dong); // 此时尚不能获取到值
       console.log(el.style);
       el.style.width = '100px'
       el.style.height = '40px'
       el.style.backgroundColor = 'green'
    },

    // 在元素被插入到DOM前被调用
    beforeMount(el, binding, vnode, preVnode) {
        console.log('------beforeMount-------');
        console.log(el.dataset.dong); // 可以获取到值
    },

    // 在绑定元素的父组件及他自己的所有子节点都挂载完成后调用
    mounted(el, binding, vnode, preVnode) {},

    // 绑定元素的父组件更新前调用
    beforeUpdate(el, binding, vnode, preVnode) {},

    // 在绑定元素的父组件及他自己的所有子节点都更新后调用
    updated(el, binding, vnode, preVnode) {},

    // 绑定元素的父组件卸载前调用
    beforeUnmount(el, binding, vnode, preVnode) {},

    // 绑定元素的父组件卸载后调用
    unmounted(el, binding, vnode, preVnode) {},
}
const dpcq = ref('dpcq')

// ------------------------------------
// 简化形式
// 一般情况下，我们仅仅需要在 mounted 和 updated 上实现相同的行为，除此之外冰不需要其他钩子。这种情况下我们可以直接用一个函数来定义指令
const color = ref('#fff000')
const vBgColor = (el, binding) => {
    el.style.width = '100px'
    el.style.height = '40px'
    el.style.backgroundColor = binding.value
}

// ------------------------------------
// 不推荐在组件上使用自定义指令
// 与props类似，自定义指令也会透传，但是对多根节点不友好，因为自定义指令无法通过v-bind:"$attrs"来灵活传递
</script>

<template>
    <div>
        <h1>This is Directive Component</h1>
        <input type="text" v-focus>
        <div v-leo:bbc.mark="dpcq" data-dong="china"></div>
        <div v-bg-color="color"></div>
    </div>
</template>