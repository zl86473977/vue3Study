<script setup>
const props = defineProps(['title'])
import { ref } from "vue";

const count = ref(0)

const emit = defineEmits({
    click: null,
    'super-click': (value) => {
        console.log('super-click valid', value);
        // false表示事件不合法，vue会有一个警告，但依旧触发父组件事件
        return false
    }
})

</script>

<template>
    <div>
        <button @click="count++">add</button>
        <span>count is {{ count }}</span>
        <div style="background-color: antiquewhite;" @click="emit('click', '666')">event check</div>
        <div style="background-color: aquamarine;" @click="emit('super-click', '666')">event super check</div>
    </div>
</template>