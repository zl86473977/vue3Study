<script setup>
import Child from './components/Child.vue'
import { onMounted, reactive, ref, watch, watchEffect } from 'vue'

const nameInput = ref(null);

const list = [1,2,3]

const liItems = ref([])

onMounted(() => {
  nameInput.value.focus()
  console.log(liItems.value);
  console.log(child.value);
})

const child = ref(null)

</script>

<template>
  <input type="text" ref="nameInput">
  <ul>
    <li v-for="item of list" :key="item" ref="liItems">{{ item }}</li>
  </ul>
  <Child ref="child"/>
</template>

<style scoped>
button+button {
  margin-left: 10px;
}
</style>
