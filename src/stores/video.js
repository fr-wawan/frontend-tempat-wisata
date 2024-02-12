import { ref, computed } from "vue";
import { defineStore } from "pinia";
import api from "@/Api/api";

export const useVideoStore = defineStore("video", () => {
  const videos = ref([]);

  function getVideos() {
    api.get("videos").then((response) => {
      videos.value = response.data.data;
    });
  }

  return { videos, getVideos };
});
