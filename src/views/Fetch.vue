<script setup>
import { useFetch } from '@/utils/fetch';
import { ref } from 'vue';

const url = ref('https://yesno.wtf/api')

const { data, error } = useFetch(url)

// setTimeout(() => {
//     url.value = 'https://www.example.com/'
// }, 1000);
</script>

<template>
    <div>
        <h1>This is Fetch url</h1>
        <div>fetch {{ url }}, get result is
            <span v-if="data">{{ data.answer }}</span>
            <span v-else>{{ error }}</span>
        </div>
    </div>
</template>