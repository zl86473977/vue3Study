<script setup>
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="hanli" class="logo" src="https://img1.baidu.com/it/u=2158171980,2545952265&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=375" width="640" height="375" />
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
