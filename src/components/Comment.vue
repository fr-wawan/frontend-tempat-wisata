<template>
    <form class="" @submit.prevent="storeComment()">
        <Input name="name" label="Nama*" v-model="form.name" placeholder="Masukkan Nama..." />
        <TextArea name="comment" label="Komen*" v-model="form.comment" placeholder="Masukkan Komen..." />


        <div>
            <button class="bg-blue-600 text-white p-3 px-7 rounded-lg shadow-md" type="submit">Submit</button>

        </div>

        <div v-for="comment in comments" :key="comment.id" class="my-5 bg-white p-5 rounded-lg shadow-sm">
            <h2 class="font-semibold text-lg mb-3">{{ comment.name }}</h2>
            <p class="text-gray-800">{{ comment.comment }}</p>
        </div>
    </form>
</template>

<script setup>
import { onMounted, reactive } from 'vue';

import Input from './Input.vue';
import TextArea from './TextArea.vue';

const props = defineProps({
    form: Object,
    comments: Array
});
const emits = defineEmits(['storeComment']);


function storeComment() {
    emits('storeComment');
}
</script>