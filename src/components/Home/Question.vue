<template>
    <div class="mt-40">
        <div class="flex items-center justify-between">
            <div>
                <h3 class="font-extrabold text-[#4475F2] text-lg">
                    FREQUENTLY ASKED QUESTION
                </h3>
                <h1 class="font-extrabold text-5xl mt-5">
                    🤔• Pertanyaan yang Sering Diajukan
                </h1>
            </div>
            <div>
                <a href="" class="text-[#4475F2] font-semibold flex items-center gap-4">
                    <span>Lihat Semua</span>
                    <RightArrow />
                </a>
            </div>
        </div>

        <div class="mt-28 mb-96">
            <template v-for="item in qnaItemsFirst">
                <div class="border shadow w-full p-7 font-bold flex justify-between items-center">
                    {{ item }}

                    <div class="rounded-full shadow-md p-3">
                        <RightArrowCompact />
                    </div>
                </div>
            </template>

            <div class="border border-l-blue-400 border-l-4 bg-[#F6F6F6] shadow w-full p-7">
                <div class="flex justify-between items-center">
                    <span class="text-blue-400 text-sm font-bold">Kenapa harus memilih Destinize?</span>

                    <div class="bg-blue-400 p-3 shadow-md rounded-full h-8">
                        <UpwardArrow />
                    </div>
                </div>
                <p class="mt-5 px-3 leading-[26px] pb-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. Lorem Ipsum
                    is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the
                    1500s, wh
                </p>
            </div>

            <template v-for="item in qnaItemsSecond">
                <div class="border shadow w-full p-7 font-bold flex justify-between items-center">
                    {{ item }}

                    <div class="rounded-full shadow-md p-3">
                        <RightArrowCompact />
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
  
<script setup>
import RightArrow from "./icon/RightArrow.vue";
import RightArrowCompact from "./icon/RightArrowCompact.vue";
import UpwardArrow from "./icon/UpwardArrow.vue";

let qnaItemsFirst = [
    "Kenapa ya pembayaranku gagal banh? 😁",
    "Apakah rehan wangsaff adalah CEO dari Destinize? 😅😅😅",
];

let qnaItemsSecond = [
    "Afa iyah bang? Gapeduli 👆🏻😅",
    "Apa rekomendasi tempat buat orang yang jomblo? 😥",
];
</script>
  