<template>
    <router-link :to="`/tempat-wisata/${place.slug}`" class="relative">
        <img :src="getImage(place.image)" alt="" class="rounded-lg">
        <div class="absolute bottom-0 bg-white/60 backdrop-blur-sm p-5 pr-12">
            <h4 class="font-bold">{{ place.name }}</h4>
            <p class="text-[#80918E]">{{ place.address }}</p>
        </div>
    </router-link>
</template>

<script setup>
const props = defineProps({
    place: Object
})
</script>