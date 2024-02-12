import { ref, computed } from "vue";
import { defineStore } from "pinia";

import api from "@/Api/api";

export const useQuestionStore = defineStore("question", () => {
  const questions = ref([]);

  function getQuestions() {
    api.get("questions").then((response) => {
      questions.value = response.data.data;
    });
  }

  return { questions, getQuestions };
});
