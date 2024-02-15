import { ref, computed } from "vue";
import { defineStore } from "pinia";

import api from "@/Api/api";

export const useArticleStore = defineStore("article", () => {
  const articles = ref([]);
  const article = ref({});
  const currentPage = ref(1);
  const totalPages = ref(1);

  function getArticles(page = 1, paginate = 10) {
    api
      .get("articles", {
        params: {
          page: page,
          paginate: paginate,
        },
      })
      .then((response) => {
        currentPage.value = response.data.data.current_page;
        totalPages.value = response.data.data.last_page;
        articles.value = response.data.data.data;
      });
  }

  function getDetailArticles(slug) {
    api.get(`articles/${slug}`).then((response) => {
      article.value = response.data.data;
    });
  }

  return {
    articles,
    getArticles,
    getDetailArticles,
    article,
    currentPage,
    totalPages,
  };
});
