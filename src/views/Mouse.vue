<script setup>
import { useMouse } from '@/utils/mouse';

const { x, y } = useMouse();
</script>

<template>
    <div>
        <h1>This i mouse component</h1>
        <div>pos_x now is {{ x }}, pos_y now is {{ y }}</div>
    </div>
</template>