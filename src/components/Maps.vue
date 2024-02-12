<template>
    <div>
        <div v-html="place.maps">
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    place: Object
})
</script>