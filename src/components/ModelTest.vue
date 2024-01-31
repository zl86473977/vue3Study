<script setup>
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
</template>