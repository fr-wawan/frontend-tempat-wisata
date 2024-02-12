<template>
    <div class="py-8">
        <div class="container mx-auto grid grid-cols-1 p-3 sm:w-full md:w-10/12">
            <PlaceCard v-for="place in places" :key="place.id" :place="place" class="mb-10" />

            <Pagination :current-page="currentPage" :total-pages="totalPages" :go-to-page="goToPage" />
        </div>
    </div>
</template>

<script setup>
import { usePlaceStore } from '@/stores/place';
import { onMounted, ref, computed } from 'vue';

import Pagination from '@/components/Pagination.vue';
import PlaceCard from '@/components/Place/PlaceCard.vue';

const store = usePlaceStore();
const paginate = ref(6);

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