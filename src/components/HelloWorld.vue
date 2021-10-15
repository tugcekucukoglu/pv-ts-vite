<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
    <InputNumber :class="{ 'p-invalid': count > 2 }"  v-model="count"></InputNumber>
    <Button label="increment" @click="count++"></Button>
</template>

