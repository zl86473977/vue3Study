<script setup>
import { onMounted } from "vue"

const props = defineProps({
  modelValue: {
    type: String,
    default: '123'
  }
})

onMounted(() => {
  emit('update:modelValue', props.modelValue)
})

const emit = defineEmits(['update:modelValue'])

function sayHello() {
  console.log(hello);
}

defineExpose({
  sayHello
})
</script>

<template>
  <div class="child">
    <span>child modelValue is {{ props.modelValue }}</span>
    <br>
    <input :value="props.modelValue" @input="emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<style scoped>
.child {}
</style>
