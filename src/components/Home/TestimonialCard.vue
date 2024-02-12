<template>
    <div class="rounded-xl shadow-xl text-center pt-14 pb-10 px-14">
        <img :src="item.avatar" class="mx-auto max-h-32 object-cover " />

        <p class="my-7 w-10/12 mx-auto text-[#737373]">
            {{ item.description }}
        </p>

        <StarIcon class="mx-auto" />

        <p class="my-5 text-[#23A6F0] font-semibold  text-xl">{{ item.username }}</p>

        <span class="text-[#252B42] font-semibold">{{ item.location }}</span>
    </div>
</template>
  
<script setup>
import StarIcon from "@/components/icon/StarIcon.vue";
const props = defineProps({
    item: Object,
});
</script>
  