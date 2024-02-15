<template>
    <div class="py-8 mx-40">
        <div>
            <h3 class="font-extrabold text-[#4475F2] text-lg">
                MENGENAL DESTINIZE
            </h3>
            <h1 class="font-extrabold text-5xl mt-5">
                🌏 • Blog Travel
            </h1>
        </div>
        <div class="grid grid-cols-4 gap-5 my-10">
            <ArticleCard :article="article" v-for="article in articles" :key="article.id" />
        </div>
        <Pagination class="" :current-page="currentPage" :total-pages="totalPages" :go-to-page="goToPage" />
    </div>
</template>

<script setup>
import { useArticleStore } from '@/stores/article';
import { onMounted, computed, ref } from 'vue';

import ArticleCard from '@/components/Article/ArticleCard.vue';
import Pagination from '@/components/Pagination.vue';

const store = useArticleStore();
const paginate = ref(12);

onMounted(() => {
    store.getArticles(1, paginate.value);
});

const articles = computed(() => {
    return store.articles;
})

const currentPage = computed(() => {
    return store.currentPage;
})

const totalPages = computed(() => {
    return store.totalPages;
});

const goToPage = (page) => {
    scrollToTop();
    store.getArticles(page, paginate.value);
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};
</script>