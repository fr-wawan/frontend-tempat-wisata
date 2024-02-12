<template>
    <div class="mb-10 flex items-center justify-between ">
        <h1 class="text-2xl font-bold">Tempat Wisata</h1>
        <router-link to="/" class="mt-0.5 flex items-center text-gray-700">
            Lihat Semua
            <ChevronRightIcon :stroke-width="1.5" :size="26" />
        </router-link>
    </div>

    <PlaceCard v-for="place in places" :key="place.id" :place="place" class="mb-10" />
</template>

<script setup>
import { usePlaceStore } from '@/stores/place';
import { onMounted, ref, computed } from 'vue';
import { ChevronRightIcon } from "vue-tabler-icons";

import PlaceCard from '@/components/PlaceCard.vue';

const store = usePlaceStore();

onMounted(() => {
    store.getPlaces(1, 4);
});

const places = computed(() => {
    return store.places;
});
</script>