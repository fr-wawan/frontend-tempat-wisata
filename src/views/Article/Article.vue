<template>
    <div class="py-8">
        <div class="container mx-auto grid grid-cols-1 p-3 sm:w-full md:w-10/12">
            <div class="grid grid-cols-4 gap-5">
                <ArticleCard :article="article" v-for="article in articles" :key="article.id" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useArticleStore } from '@/stores/article';
import { onMounted, computed } from 'vue';

import ArticleCard from '@/components/Article/ArticleCard.vue';

const store = useArticleStore();

onMounted(() => {
    store.getArticles(1, 8);
});

const articles = computed(() => {
    return store.articles;
})
</script>