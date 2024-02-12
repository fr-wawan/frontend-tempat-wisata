<template>
    <div class="mt-20">
        <h3 class="font-extrabold text-[#4475F2]">DESTINASI FAVORIT</h3>


        <div class="flex justify-between mt-5">
            <h1 class="font-extrabold text-4xl">Temukan Destinasi Favoritmu</h1>
            <a href="" class="text-[#4475F2] font-semibold flex items-center gap-4">
                <span>Lihat Semua</span>
                <RightArrow />
            </a>
        </div>
        <div class="content-evenly flex justify-between mt-10 gap-10 ">
            <PlaceCard v-for="place in places" :key="place.id" :place="place" class="mb-10" />
        </div>
    </div>
</template>

<script setup>
import { usePlaceStore } from '@/stores/place';
import { onMounted, ref, computed } from 'vue';
import { ChevronRightIcon } from "vue-tabler-icons";

import RightArrow from "@/components/icon/RightArrow.vue";
import PlaceCard from '../Place/PlaceCard.vue';

const store = usePlaceStore();

onMounted(() => {
    store.getPlaces(1, 4);
});

const places = computed(() => {
    return store.places;
});
</script>