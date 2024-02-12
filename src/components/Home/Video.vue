<template>
    <div>
        <swiper :slidesPerView="numberOfSlides" :spaceBetween="30" :autoplay="{ delay: 2500, disableOnInteraction: false }"
            :pagination="{ clickable: true }" :modules="modules">
            <SwiperSlide class="flex " v-for="video in videos" :key="video.id">
                <div class="relative cursor-pointer">
                    <div @click="openModal(video)">
                        <img :src="getYoutubeThumbnail(video.link)" class="w-full rounded-xl" />
                        <img src="../../../public/images/play-icon.png" alt=""
                            class="absolute w-20  transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2 ">
                    </div>
                </div>
            </SwiperSlide>
        </swiper>
        <Modal v-if="isOpen" @closeModal="closeModal">
            <iframe :src="getYoutube(selectedVideo.link)" frameborder="0" class="w-full md:h-96 h-60 rounded-2xl"></iframe>

            <h2 class="mt-5 text-xl font-bold">{{ selectedVideo.title }}</h2>
            <p class="mb-5 mt-3 leading-loose">{{ selectedVideo.description }}</p>
        </Modal>
    </div>
</template>

<script setup>
import { useVideoStore } from "@/stores/video";
import { onMounted, computed, ref } from "vue";

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from "swiper/modules";
import Modal from "@/components/Modal.vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const store = useVideoStore();
let modules = [Autoplay, Pagination];

const isOpen = ref(false);
const selectedVideo = ref({});

onMounted(() => {
    store.getVideos();
})

const videos = computed(() => {
    return store.videos;
})

const screen = computed(() => {
    return {
        md: window.innerWidth >= 768,
        lg: window.innerWidth >= 1024,
    };
});


const numberOfSlides = computed(() => {
    if (screen.value.lg) {
        return 3;
    }
    if (screen.value.md) {
        return 2;
    }
    return 1;
});

const openModal = (video) => {
    isOpen.value = true;
    selectedVideo.value = video;
}

const closeModal = (video) => {
    isOpen.value = false;
    selectedVideo.value = {};
}
</script>