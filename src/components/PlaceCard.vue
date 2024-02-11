<template>
    <div>
        {{ places }}
    </div>
</template>

<script setup>
import { usePlaceStore } from '@/stores/place';
import { onMounted, ref, computed } from 'vue';

const store = usePlaceStore();

onMounted(() => {
    store.getPlaces();
});

const places = computed(() => {
    return store.places;
});
</script>