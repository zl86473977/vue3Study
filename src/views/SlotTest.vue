<script setup>
import { ref } from "vue";

const mainValue = ref('red')
const headerValue = ref('yellow')
const footerValue = ref('green')
</script>

<template>
    <div>
        <div>SlotTest</div>
        <header>
            <slot name="header" :headerValue="headerValue">header default</slot>
        </header>
        <slot :mainValue="mainValue">main default</slot>
        <footer>
            <slot name="footer" :footerValue="footerValue">footer default</slot>
        </footer>
        <div>

        </div>
    </div>
</template>