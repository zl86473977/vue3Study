<script setup>
import { inject, ref } from "vue";

const { greetings } = inject('i18n');
</script>

<template>
    <div>
        hello {{ $translate('greetings.hello') }}
        role: {{ greetings.role }}
    </div>
</template>