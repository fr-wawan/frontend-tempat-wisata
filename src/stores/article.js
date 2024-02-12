import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useArticleStore = defineStore("article", () => {
  const articles = ref([]);

  function getArticles(page = 1, paginate = 10) {
    api
      .get("articles", {
        params: {
          page: page,
          paginate: paginate,
        },
      })
      .then((response) => {
        articles.value = response.data.data;
      });
  }
});
