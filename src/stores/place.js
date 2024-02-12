import { ref, computed } from "vue";
import { defineStore } from "pinia";
import api from "@/Api/api";

export const usePlaceStore = defineStore("place", () => {
  const places = ref([]);
  const currentPage = ref(1);
  const totalPages = ref(1);

  function getPlaces(page = 1, paginate = 5) {
    api
      .get("places", {
        params: {
          page: page,
          paginate: paginate,
        },
      })
      .then((response) => {
        currentPage.value = response.data.data.current_page;
        totalPages.value = response.data.data.last_page;
        places.value = response.data.data.data;
      });
  }
  return { places, currentPage, totalPages, getPlaces };
});
