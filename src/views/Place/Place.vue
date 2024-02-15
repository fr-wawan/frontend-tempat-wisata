<template>
    <div class="py-8 mx-40">
        <h3 class="font-extrabold text-[#4475F2]">DESTINASI FAVORIT</h3>
        <h1 class="font-extrabold text-4xl">Temukan Destinasi Favoritmu</h1>
        <div class="grid grid-cols-4 mt-10 gap-10">
            <PlaceCard v-for="place in places" :key="place.id" :place="place" class="mb-10" />

        </div>
        <Pagination :current-page="currentPage" :total-pages="totalPages" :go-to-page="goToPage" />
    </div>
</template>

<script setup>
import { usePlaceStore } from '@/stores/place';
import { onMounted, ref, computed } from 'vue';

import Pagination from '@/components/Pagination.vue';
import PlaceCard from '@/components/Place/PlaceCard.vue';
const store = usePlaceStore();
const paginate = ref(12);

onMounted(() => {
    store.getPlaces(1, paginate.value);
});

const places = computed(() => {
    return store.places;
})

const currentPage = computed(() => {
    return store.currentPage;
})

const totalPages = computed(() => {
    return store.totalPages;
});

const goToPage = (page) => {
    scrollToTop();
    store.getPlaces(page, paginate.value);
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

</script>