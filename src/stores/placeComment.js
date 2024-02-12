import { ref, computed } from "vue";
import { defineStore } from "pinia";

import api from "@/Api/api";

export const usePlaceCommentStore = defineStore("placeComment", () => {
  const comments = ref([]);
  const currentPage = ref(1);
  const totalPages = ref(1);

  function getComments(place_id, page) {
    api
      .get(`places/comment/${place_id}`, {
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
      const response = await api.post("places/comment", params);

      return response;
    } catch (error) {
      throw error;
    }
  }

  return { comments, currentPage, totalPages, storeComment, getComments };
});
