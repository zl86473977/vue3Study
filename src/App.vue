<script setup>
import Child from './components/Child.vue'
import ButtonCounter from './components/ButtonCounter.vue'
// import ModelTest from './components/ModelTest.vue'
import TestAttribute from './views/TestAttribute.vue'
// import SlotTest from './views/SlotTest.vue'
import { onMounted, onUnmounted, provide, reactive, ref, shallowRef, watch, watchEffect } from 'vue'
import { provideKey } from './utils/commonj'
import Mouse from './views/Mouse.vue'
import Fetch from './views/Fetch.vue'
import Directive from './views/Directive.vue'
import I18n from './views/I18n.vue'
import UploadFile from './views/UploadFile.vue'
import UploadFile2 from './views/UploadFile2.vue'

function handleCounterClick(value) {
  console.log('ButtonCounter', value);
}
function handleCounterSuperClick(value) {
  console.log('handleCounterSuperClick', value);
}

// -------------------------------------------

const tabs = shallowRef([Child, ButtonCounter])
const currentTab = ref(0)
function handleSiki() {
  console.log('---handleSiki---');
}

// -------------------------------------------
const modelValue = ref('this is modelValue')
const modelTitle = ref('this is modelTitle')

// -------------------------------------------
const attr = ref('attr')

// -------------------------------------------
const slotValue = ref('header')
const clock = setInterval(() => {
  switch (slotValue.value) {
    case 'header':
      slotValue.value = 'default'
      break;
    case 'default':
      slotValue.value = 'footer'
      break;
    case 'footer':
      slotValue.value = 'header'
      break;
  }
}, 3000)

onUnmounted(() => {
  console.log('---clearTimeout:clock----');
  clock && clearTimeout(clock)
})

// ------------------------------------------
provide('app', 'this is root node')
const appMsg = ref('ref app msg')
provide('appMsg', appMsg)
provide(provideKey, 'bbc')
</script>

<template>
  <!-- <Child />
  <button>1123</button>
  <br>

  <ButtonCounter title="444" camelCase="1" kebab-case="2" @click="handleCounterClick"
    @super-click="handleCounterSuperClick" @siki="handleSiki" />
  <br>

  <keep-alive>
    <component :is="tabs[currentTab]"></component>
  </keep-alive>
  <div>
    <button @click="currentTab = (currentTab + 1) % 2">change component</button>
  </div>
  <br>
  <ModelTest v-model.capitalize="modelValue" v-model:title="modelTitle" />
  <br> -->

  <!-- <TestAttribute v-model="attr" level="1" />
  <br> -->

  <!-- <SlotTest>
    <template v-slot:header="">
      <span style="color:aquamarine">header</span>
    </template>
    <template #default>
      <span style="color:brown">具名的插槽会被提取出去,剩下的都作为默认插槽</span>
    </template>
    <template #footer="{ footerValue }">
      <span :style="{ color: footerValue }">footer slot value is {{ footerValue }}</span>
    </template>
  </SlotTest>
  <br>
  <SlotTest>
    <template #[slotValue]>
      <span style="color:red">this is dinamic slot,slot now is {{ slotValue }}</span>
    </template>
  </SlotTest>
  <br>
  <SlotTest v-slot="{ mainValue }">
    <span style="color:red">child color is {{ mainValue }}</span>
  </SlotTest>
  <br> -->

  <!-- <Mouse /> -->

  <!-- <Fetch /> -->

  <!-- <Directive /> -->

  <!-- <I18n /> -->

  <UploadFile />
  <!-- <UploadFile2 /> -->
</template>

<style scoped>
button+button {
  margin-left: 10px;
}
</style>
