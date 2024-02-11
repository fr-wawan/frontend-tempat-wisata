<template>
    <div class="py-8">
        <div class="container mx-auto grid grid-cols-1 p-3 sm:w-full md:w-10/12">
            <HeaderHome />

            <div class="mt-10">
                <PlaceCard v-for="place in places" :key="place.id" :place="place" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { usePlaceStore } from '@/stores/place';
import { onMounted, ref, computed } from 'vue';
import HeaderHome from '@/components/HeaderHome.vue';
import PlaceCard from '@/components/PlaceCard.vue';

const store = usePlaceStore();

onMounted(() => {
    store.getPlaces();
});

const places = computed(() => {
    return store.places;
});
</script>