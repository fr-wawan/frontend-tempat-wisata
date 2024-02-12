<template>
    <div>
        <p class="leading-loose" v-html="place.description"></p>
    </div>
</template>

<script setup>
const props = defineProps({
    place: Object
});
</script>