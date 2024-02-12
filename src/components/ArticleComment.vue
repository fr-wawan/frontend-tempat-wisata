<template>
    <div>
        <Comment :form="form" @store-comment="storeComment" :comments="comments" />

        <Pagination :current-page="currentPage" :total-pages="totalPages" :go-to-page="goToPage"
            v-if="comments.length >= 10" />
    </div>
</template>

<script setup>
import { useArticleCommentStore } from '@/stores/articleComment';
import { onMounted, reactive, computed } from 'vue';
import { useToast } from "vue-toastification";

import Comment from './Comment.vue';
import Pagination from './Pagination.vue';
const props = defineProps({
    article: Object
});

const store = useArticleCommentStore();
const toast = useToast();

const form = reactive({
    name: "",
    comment: "",
})

onMounted(() => {
    store.getComments(props.article.id);
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
    store.getComments(props.article.id, page);
}

const storeComment = async () => {
    const params = {
        name: form.name,
        comment: form.comment,
        article_id: props.article.id
    };
    await store.storeComment(params);
    form.name = "";
    form.comment = "";
    toast.success("Berhasil Komen!");
    store.getComments(props.article.id);
}
</script>