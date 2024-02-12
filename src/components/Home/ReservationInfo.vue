<template>
    <div class="flex mt-10 w-11/12 items-center gap-5 text-[#5E6282]">
        <div class="rounded-xl bg-[#EFE0B4] p-4 text-2xl">{{ item.icon }}</div>
        <div>
            <h3 class="font-bold text-xl mb-2">{{ item.title }}</h3>
            <p>
                {{ item.description }}
            </p>
        </div>
    </div>
</template>
  
<script setup>
const props = defineProps({
    item: Object,
});
</script>
  