<template>
    <div class="py-8">
        <div class="mx-48">
            <Hero />
            <Sponsor />
            <Place />
            <Reservation />
            <Maps />
            <Article />
            <Testimonial />
            <Question />
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
import Hero from '@/components/Home/Hero.vue';
import Sponsor from "@/components/Home/Sponsor.vue";
import Place from '@/components/Home/Place.vue';
import Reservation from '@/components/Home/Reservation.vue';
import Maps from '@/components/Home/Maps.vue';
import Article from '@/components/Home/Article.vue';
import Testimonial from "@/components/Home/Testimonial.vue";
import Question from '@/components/Home/Question.vue';
import Video from '@/components/Home/Video.vue';
</script>