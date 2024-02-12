<template>
    <div class="flex items-start gap-5">
        <div class="bg-[#EFF2F6] rounded-full p-3">
            <component :is="item.icon" />
        </div>
        <div class="text-[#18214D]">
            <h3 class="font-bold text-xl">{{ item.title }}</h3>
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
  