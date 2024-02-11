<template>
    <div class="bg-white rounded-xl shadow-md flex">
        <img :src="getImage(place.image)" alt="" class="w-3/12 rounded-l-xl">
        <div class="p-5">
            <h1 class="text-2xl font-semibold">{{ place.name }}</h1>
            <p class="text-gray-600 my-3 text-sm">{{ place.address }}</p>
            <p v-html="place.description"></p>

            <div class="text-right my-5">
                <router-link to="/"
                    class="bg-blue-500 text-white p-3 px-5 rounded-lg border-2 border-blue-600 hover:bg-white hover:text-blue-500 hover:transition-all hover:duration-300">Selengkapnya...</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    place: Object
})
</script>