<script setup>
import { ref } from "vue";

const props = defineProps({
    title: String,
    camelCase: String,
    kebabCase: String,
    propE: {
        type: Object,
        default() {
            return { message: 'hello' }
        }
    },
    propG: {
        type: Function,
        default() {
            return 'Default function'
        }
    }
})

console.log(props.propG());



const count = ref(0)
const emit = defineEmits({
    click: null,
    'super-click': (value) => {
        console.log('super-click valid', value);
        // false表示事件不合法，vue会有一个警告，但依旧触发父组件事件
        return false
    },
    siki: undefined
})

</script>

<template>
    <div style="background-color: #ff0000;">
        <button @click="count++">add</button>
        <div>title {{ title }}</div>
        <div>count is {{ count }}</div>
        <button @click="emit('click', '666')">event check</button>
        <button @click="emit('super-click', '666')">event super check</button>
        <div>camelCase is {{ camelCase }}</div>
        <div>kebab-case is {{ kebabCase }}</div>
        <button @click="$emit('siki')">siki</button>
    </div>
</template>