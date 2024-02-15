<template>
    <div class="mt-24">
        <div class="flex items-center justify-between">
            <div>
                <h3 class="font-extrabold text-[#4475F2] text-lg">
                    MENGENAL DESTINIZE
                </h3>
                <h1 class="font-extrabold text-5xl mt-5">
                    🌏 • Blog Travel
                </h1>
            </div>
            <div>
                <router-link to="/artikel" href="" class="text-[#4475F2] font-semibold flex items-center gap-4">
                    <span>Lihat Semua</span>
                    <RightArrow />
                </router-link>
            </div>
        </div>
        <div class="grid grid-cols-4 gap-5 mt-10">
            <ArticleCard :article="article" v-for="article in articles" :key="article.id" />
        </div>
    </div>
</template>

<script setup>
import { useArticleStore } from '@/stores/article';
import { onMounted, computed } from 'vue';

import RightArrow from "@/components/icon/RightArrow.vue";
import ArticleCard from '../Article/ArticleCard.vue';

const store = useArticleStore();

onMounted(() => {
    store.getArticles(1, 4);
});

const articles = computed(() => {
    return store.articles;
})
</script>