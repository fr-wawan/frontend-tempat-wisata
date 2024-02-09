<template>
    <div>
    </div>
</template>

<script setup>
import { useSliderStore } from '@/stores/slider';
import { onMounted, ref, computed } from 'vue';

const store = useSliderStore();

onMounted(() => {
    store.getSliders();
})

const sliders = computed(() => {
    return store.sliders;
})
</script>