<template>
    <div class="mb-10 flex items-center justify-between ">
        <h1 class="text-2xl font-bold">Artikel</h1>
        <router-link to="/artikel" class="mt-0.5 flex items-center text-gray-700">
            Lihat Semua
            <ChevronRightIcon :stroke-width="1.5" :size="26" />
        </router-link>

    </div>
    <div class="grid grid-cols-4 gap-5">
        <ArticleCard :article="article" v-for="article in articles" :key="article.id" />
    </div>
</template>

<script setup>
import { useArticleStore } from '@/stores/article';
import { onMounted, computed } from 'vue';

import { ChevronRightIcon } from "vue-tabler-icons";
import ArticleCard from '../ArticleCard.vue';

const store = useArticleStore();

onMounted(() => {
    store.getArticles(1, 8);
});

const articles = computed(() => {
    return store.articles;
})
</script>