import { ref, computed } from "vue";
import { defineStore } from "pinia";
import api from "@/Api/api";

export const useSliderStore = defineStore("slider", () => {
  const sliders = ref([]);

  function getSliders() {
    api.get("sliders").then((response) => {
      sliders.value = response.data.data;
    });
  }

  return { sliders, getSliders };
});
