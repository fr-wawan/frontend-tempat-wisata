<template>
    <div>
        <p class="leading-loose" v-html="description"></p>
    </div>
</template>

<script setup>
const props = defineProps({
    description: String
});
</script>