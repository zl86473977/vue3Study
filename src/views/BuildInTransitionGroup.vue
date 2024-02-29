<script setup>
import { ref } from 'vue';

const show = ref(false)
const items = ref([1, 2, 3, 4, 5])
function randomAdd() {
    const rand = Math.round(Math.random() * items.value.length)
    items.value.splice(rand, 0, items.value.length + 1)
}
function randomDelete() {
    const rand = Math.round(Math.random() * items.value.length)
    items.value.splice(rand, 1)
}
</script>
<template>
    <div>
        <div style="box-shadow: 1px 1px 5px gold;">
            <button @click="show = !show">Toggle</button>
            <TransitionGroup tag="div">
                <p v-if="show">hello</p>
            </TransitionGroup>
        </div>
        <div>
            <button @click="randomAdd">随意加一项</button>
            <button @click="randomDelete">随意减一项</button>
        </div>
        <TransitionGroup name="list" tag="ul">
            <li v-for="item in items" :key="item">
                {{ item }}
            </li>
        </TransitionGroup>
    </div>
</template>

<style>
.list-move,
/* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除 以便能够正确地计算移动的动画。 */
.list-leave-active {
    position: absolute;
}
</style>