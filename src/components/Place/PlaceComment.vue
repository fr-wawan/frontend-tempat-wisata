<template>
    <div>
        <Comment :form="form" @store-comment="storeComment" :comments="comments" />
    </div>
</template>

<script setup>
import { usePlaceCommentStore } from '@/stores/placeComment';
import { onMounted, reactive, computed } from 'vue';
import { useToast } from "vue-toastification";

import Comment from '../Comment.vue';
import Pagination from '../Pagination.vue';

const props = defineProps({
    place: Object
});
const store = usePlaceCommentStore();
const toast = useToast();

const form = reactive({
    name: "",
    comment: "",
})

onMounted(() => {
    store.getComments(props.place.id);
})

const comments = computed(() => {
    return store.comments;
})

const currentPage = computed(() => {
    return store.currentPage;
})

const totalPages = computed(() => {
    return store.totalPages;
});

const goToPage = (page) => {
    store.getComments(props.place.id, page);
}

const storeComment = async () => {
    const params = {
        name: form.name,
        comment: form.comment,
        place_id: props.place.id
    };
    await store.storeComment(params);
    form.name = "";
    form.comment = "";
    toast.success("Berhasil Komen!");
    store.getComments(props.place.id);
}

</script>