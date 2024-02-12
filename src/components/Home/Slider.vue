<template>
    <div class="">
        <swiper :modules="modules" :slides-per-view="1" :space-between="50" navigation :pagination="{ clickable: true }"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }">
            <swiper-slide v-for="slider in sliders">
                <img :src="getImage(slider.image)" alt="" :key="slider.id"
                    class="w-full h-[40rem] object-cover rounded-xl border-2"></swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import { useSliderStore } from '@/stores/slider';
import { onMounted, ref, computed } from 'vue';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const store = useSliderStore();
const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];


onMounted(() => {
    store.getSliders();
})

const sliders = computed(() => {
    return store.sliders;
})
</script>

