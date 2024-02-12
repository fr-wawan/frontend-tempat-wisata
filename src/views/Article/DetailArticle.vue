<template>
    <div class="py-8 ">
        <div class="container mx-auto grid grid-cols-1 p-3 sm:w-full md:w-8/12 ">
            <img :src="getImage(article.image)" alt="" class="w-full max-h-[40rem] object-cover rounded-xl">

            <div class="my-10">
                <h1 class="text-4xl mb-2 font-bold text-blue-950 pb-3">{{ article.title }}</h1>
                <div class="text-gray-600  flex items-center gap-x-1">
                    <CalendarIcon :stroke-width="1.5" />
                    <span>{{ article.created_at }}</span>
                </div>
            </div>

            <div class="grid grid-cols-2 mb-10">
                <div class="text-center border-b-2 pb-2 font-bold text-xl cursor-pointer"
                    @click="changeComponent(Description)" :class="component.__name == 'Description'
                        ? 'border-b-[#00467B] text-[#00467B]'
                        : ' text-gray-500'
                        ">
                    <h3 class="">DESKRIPSI</h3>
                </div>
                <div class="text-center border-b-2 pb-2 font-bold text-xl cursor-pointer"
                    @click="changeComponent(ArticleComment)" :class="component.__name == 'ArticleComment'
                        ? 'border-b-[#00467B] text-[#00467B]'
                        : ' text-gray-500'">
                    <h3>KOMENTAR</h3>
                </div>
            </div>

            <component :is="component" :description="article.content" :article="article">
            </component>
        </div>
    </div>
</template>

<script setup>
import { useArticleStore } from '@/stores/article';
import { onMounted, computed, shallowRef, reactive } from 'vue';
import { useRoute } from 'vue-router';

import { CalendarIcon } from 'vue-tabler-icons';
import Description from "@/components/Description.vue";
import ArticleComment from '@/components/Article/ArticleComment.vue';

const store = useArticleStore();
const route = useRoute();

const component = shallowRef(Description);


onMounted(() => {
    store.getDetailArticles(route.params.slug);
});

const article = computed(() => {
    return store.article;
})

const changeComponent = (comp) => {
    component.value = comp;
}

</script>