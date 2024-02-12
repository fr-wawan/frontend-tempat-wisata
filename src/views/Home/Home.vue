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
    </div>
</template>

<script setup>
import Slider from '@/components/Home/Slider.vue';
import Place from '@/components/Home/Place.vue';
import Article from '@/components/Home/Article.vue';
</script>