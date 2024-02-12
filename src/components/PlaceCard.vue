<template>
    <router-link :to="`/tempat-wisata/${place.slug}`" class="bg-white rounded-xl shadow-md flex">
        <img :src="getImage(place.image)" alt="" class="w-96 rounded-l-xl">
        <div class="p-5">
            <h1 class="text-2xl font-semibold">{{ place.name }}</h1>
            <div class="text-gray-600 my-3 text-sm flex items-center gap-x-1">
                <MapPinIcon :stroke-width="1.5" />
                <span>{{ place.address }}</span>
            </div>
            <p v-html="truncate(place.description, 300)"></p>
        </div>
    </router-link>
</template>

<script setup>
import { MapPinIcon } from "vue-tabler-icons";
const props = defineProps({
    place: Object
})
</script>