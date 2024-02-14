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
            <Video />
        </div>

    </div>
</template>

<script setup>
import Hero from '@/components/Home/Hero.vue';
import Slider from '@/components/Home/Slider.vue';
import Sponsor from "@/components/Home/Sponsor.vue";
import Place from '@/components/Home/Place.vue';
import Reservation from '@/components/Home/Reservation.vue';
import Maps from '@/components/Home/Maps.vue';
import Article from '@/components/Home/Article.vue';
import Testimonial from "@/components/Home/Testimonial.vue";
import Question from '@/components/Home/Question.vue';
import Video from '@/components/Home/Video.vue';
</script>