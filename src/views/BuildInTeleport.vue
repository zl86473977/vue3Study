<script setup>
import { ref } from 'vue';

const open = ref(false)
</script>

<template>
    <div style="transform: scaleY(2)">
        <button @click="open = true">Open Modal</button>

        <Teleport to="body">
            <div v-if="open" class="modal">
                <p>Hello from the modal!</p>
                <button @click="open = false">Close</button>
            </div>
        </Teleport>
    </div>
</template>

<style>
.modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
}
</style>