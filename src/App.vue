<script setup>
import Child from './components/Child.vue'
import ButtonCounter from './components/ButtonCounter.vue'
import { onMounted, reactive, ref, shallowRef, watch, watchEffect } from 'vue'

function handleCounterClick(value) {
  console.log('ButtonCounter', value);
}

function handleCounterSuperClick(value) {
  console.log('handleCounterSuperClick', value);
}

const tabs = shallowRef(['child', ButtonCounter])
const currentTab = ref(0)
</script>

<template>
  <!-- <Child /> -->
  <component :is="Child"></component>
  <br>
  <ButtonCounter title="444" @click="handleCounterClick" @super-click="handleCounterSuperClick" />

  <br>
  <!-- currentTab 改变时组件也改变 -->
  <keep-alive>
    <component :is="tabs[currentTab]"></component>
  </keep-alive>
  <button @click="currentTab = (currentTab + 1) % 2">change component</button>
</template>

<style scoped>
button+button {
  margin-left: 10px;
}
</style>
