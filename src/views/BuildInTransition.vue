<!-- 内置组件 -->
<script setup>
import { ref } from 'vue';

const show = ref(false)
const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
</script>
<template>
    <div>
        <!-- <Transition> <TransitionGroup> -->
        <!-- <Transition> 仅支持单个元素或组件作为其插槽内容。如果内容是一个组件，这个组件必须仅有一个根元素。 -->
        <div style="box-shadow: 1px 1px 5px gold;">
            <button @click="show = !show">Toggle default</button>
            <Transition>
                <p v-if="show">hello</p>
            </Transition>
        </div>
        <div style="box-shadow: 1px 1px 5px gold;">
            <button @click="show1 = !show1">Toggle leo</button>
            <Transition name="leo">
                <p v-if="show1">hello</p>
            </Transition>
        </div>
        <div style="box-shadow: 1px 1px 5px gold;">
            <button @click="show2 = !show2">Toggle bounce</button>
            <Transition name="bounce">
                <p v-if="show2" style="text-align: center;">
                    Hello here is some bouncy text!
                </p>
            </Transition>
        </div>
        <div style="box-shadow: 1px 1px 5px gold;">
            <button @click="show3 = !show3">Toggle nested</button>
            <Transition name="nested" :duration="550">
                <div v-if="show3" class="outer">
                    <div class="inner">
                        Hello
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}


.leo-enter-active {
    transition: all 0.3s ease-out;
}

.leo-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.leo-enter-from,
.leo-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}

.outer,
.inner {
    background: #eee;
    padding: 30px;
    min-height: 100px;
}

.inner {
    background: #ccc;
}

.nested-enter-active,
.nested-leave-active {
    transition: all 0.3s ease-in-out;
}

/* delay leave of parent element 父节点晚点消失 */
.nested-leave-active {
    transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
    transform: translateY(30px);
    opacity: 0;
}



/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
    transition: all 0.3s ease-in-out;
}

/* 这一行必须放在上一个css后 子节点晚点出现*/
.nested-enter-active .inner {
    transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
    transform: translateX(30px);
    opacity: 0;
}
</style>