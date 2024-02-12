<template>
    <div class="mt-28">
        <div class="flex items-center justify-between">
            <div>
                <h3 class="font-extrabold text-[#4475F2] text-lg">
                    FREQUENTLY ASKED QUESTION
                </h3>
                <h1 class="font-extrabold text-5xl mt-5">
                    🤔• Pertanyaan yang Sering Diajukan
                </h1>
            </div>
        </div>

        <div class="mt-16">
            <Disclosure v-for="question in questions" :key="question.id" :question="question" />
        </div>
    </div>
</template>
  
<script setup>
import { useQuestionStore } from "@/stores/question";
import { onMounted, computed } from "vue";

import Disclosure from "../Disclosure.vue";
import RightArrow from "../icon/RightArrow.vue";

const store = useQuestionStore();

onMounted(() => {
    store.getQuestions();
})

const questions = computed(() => {
    return store.questions;
})
</script>
  