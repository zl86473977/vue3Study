<!-- 内置组件 -->
<script setup>
import { ref } from 'vue';

const show = ref(false)
</script>
<template>
    <div>
        <!-- <Transition> <TransitionGroup> -->
        <div>
            <button @click="show = !show">Toggle</button>
            <Transition>
                <p v-if="show">hello</p>
            </Transition>
        </div>
    </div>
</template>