<script setup>
import { inject } from "vue"
import { provideKey } from '../utils/commonj'
const props = defineProps({
    modelValue: String,
    modelModifiers: { type: Object, default: () => ({})},
    title: String,
    titleModifiers: { type: Object, default: () => ({})},
})

const emit = defineEmits(['update:modelValue', 'update:title'])
function handleInputChange(e) {
    let value = e.target.value
    if(props.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
    }
    emit('update:modelValue', value)
}

function handleTitleChange(e) {
    let value = e.target.value
    if(props.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
    }
    emit('update:title', value)
}

// ---------------------------------------------
const app = inject('app');
console.log('modelTest inject app is', app);
const appMsg = inject('appMsg')
const injectKey = inject(provideKey)
console.log('provideKey is ', injectKey);
</script>

<template>
    <ul>
        <li>
            <input type="text" :value="modelValue" @input="handleInputChange">
        </li>
        <li>
            <input type="text" :value="title" @input="handleTitleChange">
        </li>
    </ul>

    <div>appMsg is {{ appMsg }}</div>
    <input type="text" v-model="appMsg">
</template>