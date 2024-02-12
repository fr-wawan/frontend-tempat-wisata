import { ref, computed } from "vue";
import { defineStore } from "pinia";

import api from "@/Api/api";

export const useArticleCommentStore = defineStore("articleComment", () => {
  const comments = ref([]);
  const currentPage = ref(1);
  const totalPages = ref(1);

  function getComments(article_id, page) {
    api
      .get(`articles/comment/${article_id}`, {
        params: {
          page: page,
        },
      })
      .then((response) => {
        comments.value = response.data.data.data;
        currentPage.value = response.data.data.current_page;
        totalPages.value = response.data.data.last_page;
      });
  }

  async function storeComment(params) {
    try {
      const response = await api.post("articles/comment", params);

      return response;
    } catch (error) {
      throw error;
    }
  }

  return { comments, currentPage, totalPages, storeComment, getComments };
});
