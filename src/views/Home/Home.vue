<template>
    <div class="py-8">
        <div class="container mx-auto grid grid-cols-1 p-3 sm:w-full md:w-10/12">
            <Slider />

            <div class="mt-14">
                <Place />
            </div>
            <div class="mt-14">
                <Article />
            </div>
        </div>

        <div class="bg-gray-100 p-5 mt-10">
            <div class="container mx-auto grid grid-cols-1 p-3 sm:w-full md:w-10/12">
                <h1 class="mb-5 text-2xl font-bold">Video Wisata</h1>
                <Video />
            </div>
        </div>
    </div>
</template>

<script setup>
import Slider from '@/components/Home/Slider.vue';
import Place from '@/components/Home/Place.vue';
import Article from '@/components/Home/Article.vue';
import Video from '@/components/Home/Video.vue';
</script>