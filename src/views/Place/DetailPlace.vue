<template>
    <div class="py-8 ">
        <div class="container mx-auto grid grid-cols-1 p-3 sm:w-full md:w-8/12 ">
            <img :src="getImage(place.image)" alt="" class="w-full max-h-[40rem] object-cover rounded-xl">

            <div class="my-10">
                <h1 class="text-4xl mb-5 font-bold text-blue-950 pb-3">{{ place.name }}</h1>
                <div class="text-gray-600 text-sm flex items-center gap-x-1">
                    <MapPinIcon :stroke-width="1.5" />
                    <span>{{ place.address }}</span>
                </div>
            </div>

            <div class="grid grid-cols-2 mb-10">
                <div class="text-center border-b-2 pb-2 font-bold text-xl cursor-pointer"
                    @click="changeComponent(Description)" :class="component.__name == 'Description'
                        ? 'border-b-[#00467B] text-[#00467B]'
                        : ' text-gray-500'
                        ">
                    <h3 class="">DESKRIPSI</h3>
                </div>
                <div class="text-center border-b-2 pb-2 font-bold text-xl cursor-pointer" @click="changeComponent(Comment)"
                    :class="component.__name == 'Comment'
                        ? 'border-b-[#00467B] text-[#00467B]'
                        : ' text-gray-500'">
                    <h3>KOMENTAR</h3>
                </div>
            </div>
            <component :is="component" :place="place"> </component>
        </div>
    </div>
</template>

<script setup>
import { usePlaceStore } from "@/stores/place";
import { onMounted, shallowRef, computed } from 'vue';
import { useRoute } from "vue-router";

import { MapPinIcon } from "vue-tabler-icons";
import Description from "@/components/Place/DetailPlace/Description.vue";
import Comment from "@/components/Place/DetailPlace/Comment.vue";

const store = usePlaceStore();
const route = useRoute();

const component = shallowRef(Description);

onMounted(() => {
    store.getDetailPlaces(route.params.slug);
});

const place = computed(() => {
    return store.place;
})

const changeComponent = (comp) => {
    component.value = comp;
}
</script>