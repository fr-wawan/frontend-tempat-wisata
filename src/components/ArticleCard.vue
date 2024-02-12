<template>
    <router-link :to="`/artikel/${article.slug}`" class="gap-5 items-center mb-8 lg:mb-5 bg-white   rounded-xl shadow-md">
        <div>
            <img :src="getImage(article.image)" alt="" class=" w-full  rounded-t-xl h-48 md:h-60 object-cover" />
        </div>

        <div class="w-full p-5 pr-5">
            <p class="text-gray-500 text-sm lg:text-base">
                {{ props.article.created_at }}
            </p>
            <h3 class="lg:text-xl font-semibold my-3 text-gray-800">
                {{ truncate(article.title, 50) }}
            </h3>


            <p v-html="truncate(article.content, 100)" class="text-gray-600"></p>
        </div>
    </router-link>
</template>

<script setup>
const props = defineProps({
    article: Object
});
</script>